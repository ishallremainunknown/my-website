import { useEffect, useState } from "react";
import s from "./orders.module.css";
import useFirebaseOrders from "../../Hooks/useFirebaseOrders";
import { PlacedOrder } from "../../Components/Core/Types/OrderType";
import { CartItem } from "../../Redux/shoppingCart-slice";

const Orders = () => {
  const { getOrders } = useFirebaseOrders();

  useEffect(() => {
    getFirebaseOrders();
  }, []);
  const [allOrders, setAllOrders] = useState<PlacedOrder[]>([]);

  const getFirebaseOrders = async () => {
    const everyOrder = await getOrders();
    console.log(everyOrder);
    setAllOrders(everyOrder);
  };

  return (
    <div className={s.main}>
      <h1 className={s.title}>Here's every order you received</h1>
      {allOrders.map((order: PlacedOrder, index) => (
        <div key={index} className={s.orderBox}>
          <div> Customer: {order.userInfo.name + " " + order.userInfo.surName} </div>
          <div> Number of items: {order.order.length}</div>
          <div> Type of payment: {order.userInfo.payment}</div>
          <div> Email: {order.userInfo.email}</div>
        </div>
      ))}
      <div></div>
    </div>
  );
};
export default Orders;
