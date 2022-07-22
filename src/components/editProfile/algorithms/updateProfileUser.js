import { writeBatch, doc } from "firebase/firestore";

export const updateProfileUser = async (db, dataOfUser, user, navigate) => {
  const batch = writeBatch(db);
  const userDocRef = doc(db, "users", dataOfUser.uid);
  batch.set(userDocRef, user, { merge: true });
  //corroborar si se han modificado los campos de nombre y apellido
  if (
    dataOfUser.name.firstName !== user.firstName ||
    dataOfUser.name.lastName !== user.lastName ||
    dataOfUser.dni !== user.dni ||
    dataOfUser.gender !== user.gender ||
    dataOfUser.phone !== user.phone ||
    dataOfUser.departament !== user.departament ||
    dataOfUser.province !== user.province ||
    dataOfUser.district !== user.district ||
    dataOfUser.birthday !== user.birthday
  ) {
    return await batch.commit().then(() => {
      console.log("Se ha actualizado el perfil");
      navigate("/visualizacion");
      window.location.reload();
    });
  } else {
    return navigate("/visualizacion");
  }
};
