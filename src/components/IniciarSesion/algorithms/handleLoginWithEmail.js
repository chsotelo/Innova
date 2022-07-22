import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence,
  } from "firebase/auth";
  import {
    collection,
    query,
    where,
    doc,
    setDoc,
    getDocs,
    arrayUnion,
  } from "firebase/firestore";
  
  export const handleLoginWithEmail = async (
    data,
    navigate,
    db,
    setCurrentUser,
    setLoading,
    setLoginErrors
  ) => {
    const auth = await getAuth();
    await setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        console.info("Persistence enabled");
        console.log(data)
        await signInWithEmailAndPassword(auth, data.email, data.password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            const usersRef = collection(db, "users");
            if (user) {
              const recoverQuery = query(
                usersRef,
                where("email", "==", user.email)
              );
              const recoverUser = await getDocs(recoverQuery);
              if (!recoverUser.empty) {
                const thisUserRef = doc(db, "users", user.uid);
                await setDoc(
                  thisUserRef,
                  {
                    metadata: {
                      createdAt: parseInt(user.metadata.createdAt),
                      listOfLogins: arrayUnion(
                        parseInt(user.metadata.lastLoginAt)
                      ),
                    },
                  },
                  { merge: true }
                ).then(() => {
                  setLoading(false);
                  setLoginErrors(null);
                  navigate("/visualizacion", { replace: true });
                  setCurrentUser(auth.currentUser);
                });
              } else {
                signOut(auth).then(() => {
                  setLoading(false);
                  navigate("/registro", { replace: true });
                });
                setCurrentUser(null);
              }
            }
          })
          .catch((error) => {
            setLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginErrors(errorCode);
            console.log(errorCode);
            console.log(errorMessage);
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };
  