import s from "./Cart.module.css";
import { Products } from "../../Components/Core/Constants/Products";
import { useDispatch } from "react-redux";
import Product from "../../Components/Product/Product";
import { useState, useEffect } from "react";
import { getItemsFromCart } from "../../Redux/webpage-slice";
import { GraduationCap } from "../../Components/Core/type";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store";

const Cart = () => {
  const dispatch = useDispatch();
  const stateItems = useSelector((state: StoreType) => state.additem.itemList);

  const [addedToCart, setAddedToCart] = useState<GraduationCap>();

  useEffect(() => {
    const getAddedItems = () => {
      ///dispatch(getItemsFromCart(addedToCart));
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.cartTitle}>
        <h1 className={s.title}>Your cart</h1>
      </div>
      <div className={s.cartItems}>
        {stateItems.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
        <button>Remove item</button>
      </div>
    </div>
  );
};
export default Cart;
