import { getAuth, signOut } from "firebase/auth";

export const closeSession = (navigate, setCurrentUser, setDataOfUser) => {
  const auth = getAuth();
  if (auth) {
    signOut(auth).then(() => {
      console.log("signOut");
      setCurrentUser(null);
      setDataOfUser(null);
      return navigate("/");
    });
  }
};
