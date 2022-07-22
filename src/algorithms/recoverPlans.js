import { collection, query, getDocs } from "firebase/firestore";

export const recoverPlans = async (db, setPlans) => {
  const recover = await getDocs(query(collection(db, "plans")));
  setPlans(
    recover.docs.map((doc) => doc.data()).sort((a, b) => a.price - b.price)
  );
};
