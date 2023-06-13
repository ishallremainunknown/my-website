import { doc } from "firebase/firestore";
import s from "./login.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={s.container}>
      <div className={s.form}>
        <h1 className={s.title}>Login</h1>
        <label className={s.label1}>email</label>
        <input
          id="email-adress"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={s.input}
          placeholder="email@something.com"
          required
        ></input>
        <label className={s.label}>password</label>
        <input
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={s.input}
          placeholder="*******"
          type="password"
          required
        ></input>

        <button className={s.button} onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
