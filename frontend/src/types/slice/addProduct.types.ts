export type descriptionType = {
  title: string;
  category: string;
  state: string;
  stock: number;
  length: number;
  width: number;
  height: number;
  price: number;
  description: string;
};

export type addProductType = {
  description: descriptionType;
  photos: string[];
  delivery: {
    delivery: boolean;
    local: boolean;
  };
};
