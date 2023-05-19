"use client";

import LayoutAuth from "@/Components/LayoutAuth";
import { useState } from "react";
import { setComplete, setData, setStep } from "@/redux/registerSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function EmailPage() {
  const [email, setEmail] = useState<string>("");

  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = () => {
    dispatch(setComplete("mail"));
    dispatch(setStep(2));
    dispatch(setData({ mail: email }));
    push("/register");
  };

  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Agregá tu e-mail</h1>
          <h2>Recibirás información de tu cuenta</h2>
        </div>
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="usuario@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full" onClick={handleSubmit}>
        Continuar
      </button>
    </LayoutAuth>
  );
}
