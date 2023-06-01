'use client';

import { Label, Checkbox } from 'flowbite-react';
import { FiCheck, FiBox } from 'react-icons/fi';
import React, { BaseSyntheticEvent, useState } from 'react';

export default function FormNewProduct() {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('CABA-C1044');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí puedes realizar alguna acción con el valor del input, como enviarlo a una API o guardar en el estado de tu componente padre.
  };

  const handleInputChange = (event: BaseSyntheticEvent) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <h1 className="m-4 text-neutral-600 font-semibold">Ubicación:</h1>
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          <p>{inputValue}</p>
        )}
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className="bg-transparent text-darkBlue text-xs rounded pl-4 py-2"
        >
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
      </div>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <p className="text-neutral-600 text-lg">Selecciona los métodos de envío</p>
          <div className="flex items-center justify-between bg-neutral-100 p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="store" />
              <Label htmlFor="store">Retiro en tienda</Label>
            </div>
            <div>
              <FiBox className="text-darkBlue" size={18} />
            </div>
          </div>
          <div className="flex items-center justify-between bg-neutral-100 p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="store" />
              <Label htmlFor="store">Retiro en tienda</Label>
            </div>
            <div>
              <p className="text-xs font-semibold">
                Mercado <span className="text-darkBlue">C</span>ountry
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
