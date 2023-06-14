import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { GraduationCap } from "../Components/Core/Types/GraduationCapType";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";

const usePicsToFirebase = () => {
  const storage = getStorage();

  const uploadPictures = async (file: File) => {
    const current = new Date();
    const GradCapPictureRef = ref(storage, "gradcap/" + current.toISOString());
    const result = await uploadBytes(GradCapPictureRef, file);
    const url = await getDownloadURL(result.ref);
    return url;
  };
  const uploadItems = async (item: GraduationCap) => {
    const ItemCollectionRef = collection(db, "gradcap");
    const result = await addDoc(ItemCollectionRef, item);
    item.id = result.id;
    return item;
  };

  return { uploadPictures, uploadItems };
};
export default usePicsToFirebase;
