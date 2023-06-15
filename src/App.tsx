import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Adress from "./Pages/Adress/Adress";
import CardId from "./Pages/CardId/CardId";
import Shop from "./Pages/Shop/Shop";

//import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/login";
import { saveUser } from "./Redux/catch-token";
import { StoreType } from "./Redux/store";
import UploadItem from "./Pages/AddNewItem/AddNewItem";
import Orders from "./Pages/Orders/Orders";

function App() {
  const auth = getAuth();
  const token = useSelector((state: StoreType) => state.auth.token);
  console.log("user from state", token);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          {token && (
            <>
              <Route path="/adress" element={<Adress />} />
              <Route path="/card" element={<CardId />} />
              <Route path="/upload" element={<UploadItem />} />
              <Route path="/orders" element={<Orders />} />
            </>
          )}

          {!token && <Route path="/login" element={<Login />} />}

          <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
