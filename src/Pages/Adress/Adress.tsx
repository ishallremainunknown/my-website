import s from "./Adress.module.css";
import { County } from "../../Components/Core/Constants/CountyType";

import { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Redux/store";
import { Counties } from "../../Components/Core/Constants/Counties";
import { useNavigate } from "react-router-dom";

import useFirebaseWeb from "../../Hooks/useFirebaseCounties";
const Adress = () => {
  const navigate = useNavigate();
  const { getCounties, addCounty } = useFirebaseWeb();

  const [counties, setCounties] = useState<County[]>([]);

  useEffect(() => {
    getDropdownCounties();
  }, []);
  const addAllCounties = async () => {
    Counties.forEach((county) => {
      addCounty(county);
    });
  };

  const getDropdownCounties = async () => {
    const allCounties = await getCounties();

    setCounties(allCounties);

    console.log(allCounties);
  };
  const toNext = () => {
    navigate("/card");
  };
  return (
    <div className={s.wrapper}>
      <div className={s.inputs}>
        <div className={s.input}>
          <h1 className={s.text}> Contact</h1>
          <label>Name</label>
          <input placeholder="Angelina" className={s.individualInput}></input>
          <label>Surname</label>
          <input placeholder="Jolie" className={s.individualInput}></input>
          <label>email</label>
          <input placeholder="something@ some.com" className={s.individualInput}></input>
          <label>Phone number</label>
          <input placeholder="07********" className={s.individualInput}></input>
        </div>

        <div className={s.input}>
          <h1 className={s.text}>Shipping adress</h1>
          <label>Select County</label>
          <select className={s.selectInput}>
            <option className={s.defaultOption} defaultChecked value={""}>
              Select County
            </option>
            {counties.map((count: County) => (
              <option>{count.county}</option>
            ))}
          </select>
          {/* <input className={s.individualInput}></input> */}
          <label>City</label>
          <input className={s.individualInput}></input>
          <label>Street</label>
          <input className={s.individualInput}></input>
          <label>Number</label>
          <input className={s.individualInput}></input>
          <label>Block</label>
          <input className={s.individualInput}></input>
          <label>Apartment</label>
          <input className={s.individualInput}></input>
          <label>Postal code</label>
          <input className={s.individualInput}></input>
        </div>
        <div className={s.selectPayment}>
          <fieldset>
            <legend>Select type of payment</legend>
            <div className={s.first}>
              <input type="radio" id="cash" name="drone" value="cash" />

              <label>Cash</label>
            </div>
            <div>
              <input type="radio" id="card" name="drone" value="card" />

              <label>Card</label>
            </div>
          </fieldset>
        </div>
        <button className={s.nextButton} onClick={toNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Adress;
