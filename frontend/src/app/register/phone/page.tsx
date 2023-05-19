"use client";

import LayoutAuth from "@/Components/LayoutAuth";
import { useState } from "react";
import { setComplete, setData, setStep } from "@/redux/registerSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function PhonePage() {
  const [phone, setPhone] = useState<string>("");

  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = () => {
    dispatch(setComplete("phone"));
    dispatch(setStep(4));
    dispatch(setData({ phone }));
    push("/register");
  };

  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Validá tu teléfono</h1>
          <h2>Podrás usarlo para ingresar a tu cuenta</h2>
        </div>
        <div className="flex flex-row gap-2">
          <select className="rounded-lg">
            <option value="54">+54</option>
            <option value="55">+55</option>
            <option value="56">+56</option>
          </select>
          <input
            type="text"
            className="w-full rounded-lg"
            placeholder="+xx xxx xxx-xxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full" onClick={handleSubmit}>
        Continuar
      </button>
    </LayoutAuth>
  );
}
