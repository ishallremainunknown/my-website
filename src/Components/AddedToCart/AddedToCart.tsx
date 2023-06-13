import s from "./AddedToCart.module.css";
import { GraduationCap } from "../Core/type";
import { deleteItem, addItemToCart, decreaseQuantity, CartItem } from "../../Redux/shoppingCart-slice";
import { useDispatch, useSelector } from "react-redux";

import { StoreType } from "../../Redux/store";
import { ChangeEventHandler, useEffect, useState } from "react";

type ComponentProps = {
  cartItem: CartItem;
};
const AddedToCart = (props: ComponentProps) => {
  const dispatch = useDispatch();

  const numberOfSameItems = useSelector((state: StoreType) => state.additem.numberOfAddedItems);
  const stateItemList = useSelector((state: StoreType) => state.additem.itemList);
  useEffect(() => {
    //instantRemove();
  });
  // const quant = stateItemList.map((item) => {
  //   return item.quantity;
  // });f
  // console.log(quant);

  // const numberOfItem = items.find((item) => {
  //   item.quantity;
  // });
  const [itemQuantity, setItemQuantity] = useState(0);

  const removeItem = () => {
    const value = stateItemList.find((item) => {
      return item.item.id === props.cartItem.item.id;
    });
    console.log(value);
    if (value) {
      dispatch(deleteItem(value));
    }
  };
  const addItem = () => {
    dispatch(addItemToCart(props.cartItem.item));
  };
  const decrease = () => {
    if (props.cartItem.quantity > 0) {
      dispatch(decreaseQuantity(props.cartItem.item));
    }
    // else if (props.cartItem.quantity === 0) {
    //   removeItem();
    //}
  };
  const instantRemove = () => {
    if (props.cartItem.quantity === 0) {
      removeItem();
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <img style={{ height: "50px", width: "50px" }} src={props.cartItem.item.productImage} />
        </div>
        {/* <div> {props.product.id}</div> */}
        <div className={s.details}>
          <div className={s.title}>
            <b>Name: {props.cartItem.item.productname}</b>
          </div>
          <div className={s.price}>Price: {+props.cartItem.item.price * props.cartItem.quantity} lei</div>
        </div>
        <div>
          <button onClick={decrease}>-</button>

          <input
            style={{ width: "40px" }}
            onChange={() => {
              addItem(), decrease();
              //instantRemove();
            }}
            value={props.cartItem.quantity}
          />
          <button onClick={addItem}>+</button>
        </div>
        <button className={s.button} onClick={removeItem}>
          Remove from Cart
        </button>
      </div>
      {/* <h1 className={s.total}>Total: {props.product.price}</h1> */}
    </div>
  );
};
export default AddedToCart;
