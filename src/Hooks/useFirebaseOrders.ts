import { addDoc, collection, orderBy, query, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { PlacedOrder } from "../Components/Core/Types/OrderType";

const useFirebaseOrders = () => {
  const uploadOrder = async (order: PlacedOrder) => {
    const orderCollectionRef = collection(db, "orders");
    const result = await addDoc(orderCollectionRef, order);
    return result;
  };

  const getOrders = async () => {
    const orderCollectionRef = collection(db, "orders");
    const q = query(orderCollectionRef, orderBy("userInfo", "asc"));
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(filteredData);
    return filteredData as PlacedOrder[];
  };

  return { uploadOrder, getOrders };
};

export default useFirebaseOrders;
