import { ChangeEvent, useState } from "react";
import s from "./AddNewItem.module.css";
import AppInput from "../../Components/Input/Input";
import usePicsToFirebase from "../../Hooks/useFirebasePictures";
import { Products } from "../../Components/Core/Constants/Products";

import { GraduationCap } from "../../Components/Core/Types/GraduationCapType";

type Item = {
  title: string;
  price: string;
  image: string | null;
  id: string;
};
const UploadItem = () => {
  const { uploadItems, uploadPictures } = usePicsToFirebase();
  const [image, setImage] = useState<File | null>();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const convertPic = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      const img = await getBase64(uploadedFile);
      setImage(uploadedFile);
      setImagePrev(img);
    }
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        resolve(reader.result as string);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
        reject(error);
      };
    });
  };

  const savePicture = async () => {
    let imageURL = "";

    if (image) {
      imageURL = await uploadPictures(image);
    }
    if (!title || !price || !imageURL) {
      alert("please fill in the fields");
    }
    const newItem: GraduationCap = {
      productname: title,
      price: price,
      productImage: imageURL,
    };
    const result = await uploadItems(newItem);
    console.log(result);
  };
  const handleReset = () => {
    setTitle(""), setImage(null), setPrice(""), setImagePrev("");
  };

  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h1 className={s.text}>Upload gradcap</h1>
        <div className={s.form}>
          <AppInput inputName="Title" placeholder="title" value={title} setValue={setTitle} />
          <AppInput inputName="Price" placeholder="price" value={price} setValue={setPrice} />

          <div className={s.upload}>
            <label className={s.inputStyle}>Upload picture:</label>
            <input
              id="upload"
              className={s.upload}
              type="file"
              name="gradcap picture"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                convertPic(e);
              }}
            />
            {imagePrev && <img className={s.uploadPic} src={imagePrev} alt="Uploaded image" />}
          </div>
          <button
            className={s.button}
            onClick={() => {
              savePicture();
              handleReset();
            }}
          >
            Add picture
          </button>
        </div>
      </div>
    </div>
  );
};
export default UploadItem;
