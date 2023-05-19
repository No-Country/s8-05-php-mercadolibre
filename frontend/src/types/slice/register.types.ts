export type registerState = {
  step: number;
  complete: {
    mail: boolean;
    user: boolean;
    phone: boolean;
    password: boolean;
  };
  data: {
    mail: string | null;
    user: string | null;
    phone: string | null;
    password: string | null;
  };
};

export type completeKey = keyof registerState["complete"];
