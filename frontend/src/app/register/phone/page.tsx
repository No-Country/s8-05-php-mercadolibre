"use client";

import LayoutAuth from "@/Components/LayoutAuth";
import { useState } from "react";
import { setComplete, setStep } from "@/Redux/registerSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function PhonePage() {
  const [phone, setPhone] = useState<string>("");

  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = () => {
    dispatch(setComplete("phone"));
    dispatch(setStep(4));
    push("/register");
  };

  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Validá tu teléfono</h1>
          <h2>Podrás usarlo para ingresar a tu cuenta</h2>
        </div>
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="+xx xxx xxx-xxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full" onClick={handleSubmit}>
        Continuar
      </button>
    </LayoutAuth>
  );
}
