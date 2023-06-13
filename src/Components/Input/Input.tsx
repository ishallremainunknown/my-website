import { ChangeEvent, useState } from "react";
import s from "./Input.module.css";

type ComponentProps = {
  inputName: string;
  inputType?: "text" | "date" | "number";
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const AppInput = (props: ComponentProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };

  return (
    <div className={s.noteBox}>
      <label>{props.inputName}</label>
      <input
        placeholder={props.placeholder}
        value={props.value}
        onInput={handleChange}
        className={s.input}
        type={props.inputType ?? "text"}
      ></input>
    </div>
  );
};

export default AppInput;
