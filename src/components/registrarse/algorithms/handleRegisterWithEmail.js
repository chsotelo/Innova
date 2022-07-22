import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { doc, writeBatch } from "firebase/firestore";
import { capitalize } from "../../../algorithms/capitalize";

export const handleRegisterWithEmail = async (
  db,
  firstName,
  lastName,
  email,
  password,
  setLoading,
  navigate
) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const user = result.user;
      if (user) {
        await updateProfile(auth.currentUser, {
          displayName: capitalize(firstName).concat(` ${lastName}`), //Cambio de displayName
        });
        await sendData(db, firstName, lastName, user, setLoading, navigate); //Envío de datos a la db de firestore
      }
    })
    .catch((error) => {
      setLoading(false);
      console.log(error.message);
    });
};

const sendData = async (
  db,
  firstName,
  lastName,
  user,
  setLoading,
  navigate
) => {
  const thisUserRef = doc(db, "users", user.uid);
  const batch = writeBatch(db);
  try {
    batch.set(
      thisUserRef,
      {
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        uid: user.uid,
        subscription: {
          endAt: null,
          price: null,
          speed: null,
          startAt: null,
        },
      },
      { merge: true }
    );

    await batch
      .commit()
      .then(async () => {
        console.log("Document successfully updated!");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  } catch (error) {
    console.error("Error updating document: ", error);
    await sendData(db, firstName, lastName, user, setLoading, navigate); //Reenvío en caso de error
  }
};
