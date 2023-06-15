import s from "./Adress.module.css";
import { County } from "../../Components/Core/Types/CountyType";

import { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Redux/store";
import { Counties } from "../../Components/Core/Constants/Counties";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../Redux/shoppingCart-slice";
import { deleteItem } from "../../Redux/shoppingCart-slice";

import useFirebaseWeb from "../../Hooks/useFirebaseCounties";
import useFirebaseOrders from "../../Hooks/useFirebaseOrders";
import { PlacedOrder } from "../../Components/Core/Types/OrderType";
import { clearCart } from "../../Redux/shoppingCart-slice";

const Adress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getCounties, addCounty } = useFirebaseWeb();

  const { uploadOrder } = useFirebaseOrders();

  const [counties, setCounties] = useState<County[]>([]);

  const [name, setName] = useState<string>("");
  const [surName, setSurName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [block, setBlock] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [selectedCounty, setSelectedCounty] = useState<string>("");
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const stateItemList = useSelector((state: StoreType) => state.additem.itemList);
  const stateCartNumber = useSelector((state: StoreType) => state.additem.numberOfAddedItems);

  useEffect(() => {
    getDropdownCounties();
  }, []);
  // const addAllCounties = async () => {
  //   Counties.forEach((county) => {
  //     addCounty(county);
  //   });
  // };

  const getDropdownCounties = async () => {
    const allCounties = await getCounties();

    setCounties(allCounties);

    console.log(allCounties);
  };
  const toNext = async () => {
    if (
      name === "" ||
      surName === "" ||
      email === "" ||
      phoneNumber === "" ||
      city === "" ||
      street === "" ||
      number === "" ||
      block === "" ||
      apartment === "" ||
      postalCode === "" ||
      selectedPayment === ""
    ) {
      alert("please fill in all the inputs!");
    } else {
      const NewOrder: PlacedOrder = {
        userInfo: {
          counties: selectedCounty,
          name: name,
          surName: surName,
          email: email,
          phoneNumber: phoneNumber,
          city: city,
          street: street,
          number: number,
          block: block,
          apartment: apartment,
          postalCode: postalCode,
          payment: selectedPayment,
        },
        order: stateItemList,
      };
      console.log(selectedPayment);

      await uploadOrder(NewOrder);

      navigate("/card");
      resetInputs();
      dispatch(clearCart());
    }
  };
  const resetInputs = () => {
    setName("");
    setSurName("");
    setEmail("");
    setPhoneNumber("");
    setCity("");
    setStreet("");
    setNumber("");
    setBlock("");
    setApartment("");
    setPostalCode("");
    setSelectedCounty("");
    setSelectedPayment("");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inputs}>
        <div className={s.input}>
          <h1 className={s.text}> Contact</h1>
          <label>Name</label>
          <input
            placeholder="Angelina"
            className={s.individualInput}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
          <label>Surname</label>
          <input
            placeholder="Jolie"
            className={s.individualInput}
            onChange={(e) => {
              setSurName(e.target.value);
            }}
            required
          ></input>
          <label>email</label>
          <input
            placeholder="something@ some.com"
            className={s.individualInput}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
          <label>Phone number</label>
          <input
            placeholder="07********"
            className={s.individualInput}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            required
          ></input>
        </div>

        <div className={s.input}>
          <h1 className={s.text}>Shipping adress</h1>
          <label>Select County</label>
          <select
            className={s.selectInput}
            onChange={(e) => {
              setSelectedCounty(e.target.value);
              console.log(e.target.value);
            }}
            required
          >
            <option className={s.defaultOption} defaultChecked aria-required>
              Select County
            </option>
            {counties.map((county) => (
              <option key={county.id} value={county.name}>
                {county.name}
              </option>
            ))}
          </select>
          {/* <input className={s.individualInput}></input> */}
          <label>City</label>
          <input
            className={s.individualInput}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          ></input>
          <label>Street</label>
          <input
            className={s.individualInput}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
            required
          ></input>
          <label>Number</label>
          <input
            className={s.individualInput}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
          ></input>
          <label>Block</label>
          <input
            className={s.individualInput}
            onChange={(e) => {
              setBlock(e.target.value);
            }}
            required
          ></input>
          <label>Apartment</label>
          <input
            className={s.individualInput}
            onChange={(e) => {
              setApartment(e.target.value);
            }}
            required
          ></input>
          <label>Postal code</label>
          <input
            className={s.individualInput}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className={s.selectPayment}>
          <fieldset>
            <legend>Select type of payment</legend>
            <div className={s.first}>
              <input
                type="radio"
                id="cash"
                name="drone"
                value="cash"
                onChange={(e) => {
                  setSelectedPayment(e.target.value);
                }}
              />

              <label>Cash</label>
            </div>
            <div>
              <input
                type="radio"
                id="card"
                name="drone"
                value="card"
                onChange={(e) => {
                  setSelectedPayment(e.target.value);
                }}
              />

              <label>Card</label>
            </div>
          </fieldset>
        </div>
        <button
          className={s.nextButton}
          onClick={() => {
            toNext();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Adress;
