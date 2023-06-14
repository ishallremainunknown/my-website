import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { County } from "../Components/Core/Types/CountyType";
import { db } from "../Firebase/firebase-config";

const useFirebaseWeb = () => {
  const addCounty = async (county: County) => {
    const countyCollectionRef = collection(db, "county");
    const result = await addDoc(countyCollectionRef, county);
    county.id = result.id;
    return result;
  };
  const getCounties = async () => {
    const countyCollectionRef = collection(db, "county");
    const q = query(countyCollectionRef, orderBy("county", "asc"));
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData as County[];
  };
  return { addCounty, getCounties };
};
export default useFirebaseWeb;
