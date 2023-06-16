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

  allOrders.map((order) => {
    const orderName = order.order.map((oneOrder) => {
      return oneOrder.item.productname;
    });
    console.log(orderName);
    return orderName;
  });

  return (
    <div className={s.main}>
      <h1 className={s.title}>Here's every order you received</h1>
      {allOrders.map((order: PlacedOrder, index) => (
        <div key={index} className={s.orderBox}>
          <div> Customer: {order.userInfo.name + " " + order.userInfo.surName} </div>
          <div> Number of items: {order.order.length}</div>
          <div className={s.orderNames}>
            Item:
            {allOrders.map((oneOrder) => {
              if (oneOrder.id === order.id) {
                const orderNames = oneOrder.order.map((placedOrder) => {
                  return placedOrder.item.productname;
                });
                console.log(orderNames);
                return (
                  <>
                    {" "}
                    {orderNames.map((orderName) => {
                      return <li>{orderName}</li>;
                    })}{" "}
                  </>
                );
              }
            })}
          </div>
          <div> Type of payment: {order.userInfo.payment}</div>
          <div> Email: {order.userInfo.email}</div>
        </div>
      ))}
      <div></div>
    </div>
  );
};
export default Orders;
