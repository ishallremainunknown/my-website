import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { PlacedOrder } from "../Components/Core/Types/OrderType";

const useFirebaseOrders = () => {
  const uploadOrder = async (order: PlacedOrder) => {
    const orderCollectionRef = collection(db, "orders");
    const result = await addDoc(orderCollectionRef, order);
    return result;
  };
  return { uploadOrder };
};

export default useFirebaseOrders;
