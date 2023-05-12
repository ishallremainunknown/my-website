import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const addPicsToFirebase = () => {
  const storage = getStorage();

  const uploadPictures = async (file: File) => {
    const current = new Date();
    const GradCapPictureRef = ref(storage, "gradcap" + current.toISOString());
    const result = await uploadBytes(GradCapPictureRef, file);
    const url = await getDownloadURL(result.ref);
    return url;
  };

  return { uploadPictures };
};
export default addPicsToFirebase;
