import s from "./Product.module.css";
import { useState } from "react";
import { addItemToCart } from "../../Redux/webpage-slice";
import { useDispatch } from "react-redux";
import { Products } from "../Core/Constants/Products";
import { GraduationCap } from "../Core/type";

type ComponentProps = {
  product: GraduationCap;
};
const Product = (props: ComponentProps) => {
  const dispatch = useDispatch();
  //const { id, productImage, price, productname } = props;

  const [cartItem, setCartItem] = useState<GraduationCap>();
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  //const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setCartItem(cartItem);
    if (cartItem) {
      dispatch(addItemToCart(cartItem));
    }
  };

  const getDefaultCart = () => {
    // let cart = {};
    // for (let i = 1; i < Products.length + 1; i++) {
    //   cart[i] = 0;
    // }
    // return cart;
  };

  const addToCart = () => {
    dispatch(addItemToCart(props.product));
    setIsAddedToCart(true);
  };
  return (
    <div className={s.container}>
      <div>
        <img style={{ height: "300px", width: "300px" }} src={props.product.productImage} />
      </div>
      <div>{props.product.id}</div>
      <div className={s.title}>
        <b>Name: {props.product.productname}</b>
      </div>
      <div className={s.price}>Price: {props.product.price}</div>

      <button
        className={s.button}
        onClick={() => {
          addToCart();
          increase();
        }}
      >
        Add To Cart {count !== 0 && `(${count})`}
      </button>
    </div>
  );
};
export default Product;
