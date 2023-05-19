export type registerDataState = {
  email: string | null;
  name: string | null;
  lastName: string | null;
  phone: string | null;
  password: string | null;
};

export type registerState = {
  step: number;
  complete: {
    email: boolean;
    user: boolean;
    phone: boolean;
    password: boolean;
  };
  data: registerDataState;
};

export type completeKey = keyof registerState['complete'];
