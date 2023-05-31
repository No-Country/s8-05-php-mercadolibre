'use client';

import { Label, Checkbox} from 'flowbite-react';
import { FiCheck } from "react-icons/fi";

/*type NavBackProps = {
  title: string;
};*/

export default function FormNewProduct(
/*{
  title
}: NavBackProps*/
) {
  return (
  <form>
    <div className="grid grid-cols-1 gap-6 mt-4">
      <p className="text-neutral-600 text-lg">Selecciona los métodos de envío</p>
      <div className="flex items-center gap-2 bg-neutral-100 p-4">
        <Checkbox id="store" />
        <Label htmlFor="store" className="flex items-center">
          Retiro en tienda
          <FiCheck className="ml-1" size={18} />
        </Label>
      </div>
      <div className="flex items-center gap-2 bg-neutral-100 p-4">
        <Checkbox id="country" />
        <Label htmlFor="country" className="flex items-center">
          Country Envío
          <FiCheck className="ml-1" size={18} />
        </Label>
      </div>
    </div>
  </form>
  );
}