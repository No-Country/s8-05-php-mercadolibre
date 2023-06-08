export type initialLocationType = {
  name: string;
  code: string;
  province: string;
  city: string;
  address: string;
  houseNumber: string;
  floor: string;
  phone: number;
  aditionalDescription: string;
};

export type initialPayType = {
  cardNumber: number;
  expiration: string;
  cvv: number;
  name: string;
  dni: string;
  type: string;
  company: string;
};

export type initialStateType = {
  location: initialLocationType;
  delivery: number;
  pay: initialPayType;
  cards: initialPayType[];
};
