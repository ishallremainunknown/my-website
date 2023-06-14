import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase-config";
import { useSelector } from "react-redux";
import { StoreType } from "../Redux/store";

const Navbar = () => {
  const navigate = useNavigate();
  const token = useSelector((state: StoreType) => state.auth.token);
  const numberOnCart = useSelector((state: StoreType) => state.additem.numberOfAddedItems);
  const jumpTo = () => {
    navigate("/upload");
  };

  //console.log(numberOnCart);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
        localStorage.removeItem("token");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className={s.navbar}>
      <div className={s.links}>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <div className={s.shoppingCart}>
            <ShoppingCart size={32} />
            {numberOnCart !== 0 && <div className={s.numberOnCart}>{numberOnCart}</div>}
          </div>
        </Link>

        {token && (
          <button className={s.button} onClick={handleLogout}>
            Log out
          </button>
        )}
        {token && (
          <button className={s.button} onClick={jumpTo}>
            Add new item
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
