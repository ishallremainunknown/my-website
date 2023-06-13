import s from "./Shop.module.css";
import { Products } from "../../Components/Core/Constants/Products";
import Product from "../../Components/Product/Product";
import usePicsToFirebase from "../../Hooks/useFirebasePictures";

const Shop = () => {
  // const uploadAll = async () => {
  //   Products.forEach((product) => {
  //     uploadPictures(product);
  //   });
  // };
  return (
    <div className={s.shop}>
      <div className={s.shopTitle}>
        <b>Personalized Graduation caps </b>
      </div>
      <div className={s.products}>
        {Products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default Shop;
