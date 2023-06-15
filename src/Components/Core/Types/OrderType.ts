import { CartItem } from "../../../Redux/shoppingCart-slice";
import { County } from "./CountyType";

export type PlacedOrder = {
  id?: string;
  userInfo: {
    counties: string;
    name: string;
    surName: string;
    email: string;
    phoneNumber: string;
    city: string;
    street: string;
    number: string;
    block: string;
    apartment: string;
    postalCode: string;
    payment: string;
  };
  order: CartItem[];
};
