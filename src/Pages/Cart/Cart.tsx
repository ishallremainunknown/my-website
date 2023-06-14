import s from "./Cart.module.css";
//import { Products } from "../../Components/Core/Constants/Products";

import AddedToCart from "../../Components/AddedToCart/AddedToCart";
import { useDispatch } from "react-redux";
// import Product from "../../Components/Product/Product";
// import { useState, useEffect } from "react";
// import { getItemsFromCart } from "../../Redux/webpage-slice";
import { GraduationCap } from "../../Components/Core/Types/GraduationCapType";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store";
//import { addPrices } from "../../Redux/webpage-slice";
import { useNavigate } from "react-router-dom";

import { Package, Phone, NumberCircleThree, NumberCircleZero, LockSimple } from "@phosphor-icons/react";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateItems = useSelector((state: StoreType) => state.additem.itemList);
  const numberOfItems = useSelector((state: StoreType) => state.additem.numberOfAddedItems);

  const checkoutPage = () => {
    if (numberOfItems === 0) {
      alert("your cart is empty");
    } else {
      navigate("/adress");
    }
  };

  const prices = stateItems.map((item) => {
    return (item.quantity * item.item.price) as number;
  });
  console.log(prices);

  const sum = prices.reduce((a, b) => a + b, 0);
  console.log(sum);

  return (
    <div className={s.wrapper}>
      <div className={s.cartTitle}>
        <h1 className={s.title}>Your cart</h1>
      </div>
      <div className={s.cartItems}>
        {stateItems.map((product) => (
          <AddedToCart key={product.item.id} cartItem={product} />
        ))}
        {/* <AddedToCart key={stateItems[0].item.id} cartItem={stateItems[0]} /> */}
      </div>

      <h1 className={s.price}>Total price: {sum} lei </h1>
      <button className={s.ckeckoutBtn} onClick={checkoutPage}>
        Proceed to checkout
      </button>

      <div className={s.divider}></div>
      <div className={s.icons}>
        <div>
          <Package size={50} color="gray" />
          <p className={s.paragraph}>The package can be opened right at arriving!</p>
        </div>
        <div>
          <Phone size={50} color="gray" />
          <p className={s.paragraph}>You can call our operators anytime!</p>
        </div>
        <div>
          <NumberCircleThree size={50} color="gray" />
          <NumberCircleZero size={50} color="gray" />
          <p className={s.paragraph}>You have the possibility to return the package up to 30 days!</p>
        </div>
        <div>
          <LockSimple size={50} color="gray" />
          <p className={s.paragraph}>Payments are secured on our page!</p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
