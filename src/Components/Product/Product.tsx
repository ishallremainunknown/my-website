import s from "./Product.module.css";
import { useEffect, useState } from "react";
import { addItemToCart, increase } from "../../Redux/shoppingCart-slice";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../Core/Constants/Products";
import { GraduationCap } from "../Core/Types/GraduationCapType";
import { StoreType } from "../../Redux/store";

type ComponentProps = {
  product: GraduationCap;
};
const Product = (props: ComponentProps) => {
  const dispatch = useDispatch();
  //const { id, productImage, price, productname } = props;

  const stateItemList = useSelector((state: StoreType) => state.additem.itemList);

  const [cartItem, setCartItem] = useState<GraduationCap>();
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const [count, setCount] = useState(0);

  //const [cartCount, setCartCount] = useState<number>(1);
  const [sum, setSum] = useState<number>(0);

  // const cartCountIncrease = () => {
  //   setCartCount(cartCount + 1);
  //console.log(cartCount);
  // };

  useEffect(() => {
    const foundItem = stateItemList.find((item) => {
      return item.item.id === props.product.id;
    });
    if (foundItem) {
      setCount(foundItem.quantity);
    } else {
      setCount(0);
    }
  }, [stateItemList, props.product]);

  const increase1 = () => {
    setCartItem(cartItem);
    if (cartItem) {
      dispatch(addItemToCart(cartItem));
    }
  };

  const addToCart = () => {
    dispatch(addItemToCart(props.product));
    setIsAddedToCart(true);
  };
  return (
    <>
      <div className={s.container}>
        <div>
          <img style={{ height: "300px", width: "300px" }} src={props.product.productImage} />
        </div>

        <div className={s.title}>
          <b>Name: {props.product.productname}</b>
        </div>
        <div className={s.price}>Price: {props.product.price} lei</div>

        <button
          className={s.button}
          onClick={() => {
            addToCart();
            increase();
            // cartCountIncrease();
          }}
        >
          Add To Cart {count !== 0 && `(${count})`}
        </button>
      </div>
    </>
  );
};
export default Product;
