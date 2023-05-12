import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.links}>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
