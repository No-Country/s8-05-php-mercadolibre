"use client";

import LayoutAuth from "@/Components/LayoutAuth";
import { BaseSyntheticEvent, useState } from "react";
import { setComplete, setData, setStep } from "@/Redux/registerSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

type userState = {
  name: string;
  lastName: string;
};

export default function UserPage() {
  const [user, setUser] = useState<userState>({
    name: "",
    lastName: "",
  });

  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = () => {
    dispatch(setComplete("user"));
    dispatch(setStep(3));
    dispatch(setData({ user: `${user.name} ${user.lastName}` }));
    push("/register");
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Elegí tu nombre</h1>
          <h2>Contanos cómo querés que te llamemos</h2>
        </div>
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="Nombre"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="Apellido"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full" onClick={handleSubmit}>
        Continuar
      </button>
    </LayoutAuth>
  );
}
