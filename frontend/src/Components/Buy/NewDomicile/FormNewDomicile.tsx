import { initialLocationType } from '@/types/slice/buy.types';
import { Label, TextInput, Textarea } from 'flowbite-react';

type FormNewProductType = {
  states: initialLocationType;
  handleChange: ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
};

export default function FormNewProduct({ states, handleChange }: FormNewProductType) {
  return (
    <form className="aboslute top-0">
      <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" value="Nombre y apellido" />

          <TextInput
            helperText="Tal cual figure en su DNI"
            id="name"
            placeholder="Ingrese su nombre y apellido"
            required
            type="text"
            value={states.name}
            name={'name'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="code" value="Código postal" />

          <TextInput
            id="code"
            placeholder="Ingrese su cód. postal"
            required
            type="text"
            value={states.code}
            name={'code'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="province" value="Provincia" />

          <TextInput
            id="province"
            placeholder="Ingrese su provincia"
            required
            type="text"
            value={states.province}
            name={'province'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="city" value="Localidad" />
          <TextInput
            id="city"
            placeholder="Ingrese su localidad"
            required
            type="text"
            value={states.city}
            name={'city'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="address" value="Calle/Avenida" />
          <TextInput
            helperText="Escriba solo el nombre de la calle o avenida"
            id="address"
            placeholder="Ingrese la calle o avenida"
            required
            type="text"
            value={states.address}
            name={'address'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="houseNumber" value="Número" />
          <TextInput
            id="houseNumber"
            placeholder="Núm. de la casa"
            required
            type="text"
            value={states.houseNumber}
            name={'houseNumber'}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="floor" value="Piso/Departamento" />
          <TextInput
            id="floor"
            helperText="(Opcional)"
            placeholder="Ej. 2b, 4h"
            type="text"
            value={states.floor}
            name={'floor'}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="phone" value="Télefono de contacto" />
          <TextInput
            id="phone"
            helperText="Se comunicaran a este número el día de la entrega"
            placeholder="Ej. (011) 154575 8782"
            required
            type="text"
            value={states.phone}
            name={'phone'}
            onChange={handleChange}
          />
        </div>
      </div>
      <div id="textarea">
        <div className="mt-4">
          <Label htmlFor="aditionalDescription" value="Indicaciones adicionales" />
        </div>
        <Textarea
          id="aditionalDescription"
          helperText="(Opcional)"
          placeholder="Ej. Casa de rejas verdes, no hay timbre, etc."
          rows={4}
          value={states.aditionalDescription}
          name={'aditionalDescription'}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
