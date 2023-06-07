import CategoriesList from '@/Components/UI/CategoriesList';
import { descriptionType } from '@/types/slice/addProduct.types';
import { Label, TextInput, Select, Textarea } from 'flowbite-react';

type FormNewProductType = {
  states: descriptionType;
  handleChange: ({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  }) => void;
};

export default function FormNewProduct({ states, handleChange }: FormNewProductType) {
  console.log(states);
  return (
    <form>
      <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email" value="Título" />

          <TextInput
            id="email"
            placeholder="Iphone"
            required
            type="text"
            value={states.title}
            name={'title'}
            onChange={handleChange}
          />
        </div>

        <div id="select">
          <div>
            <Label htmlFor="category" value="Categoría" />
          </div>
          <CategoriesList onChange={handleChange} defaultValue={states.category} />
        </div>

        <div id="select">
          <div>
            <Label htmlFor="status" value="Estado" />
          </div>
          <Select
            id="status"
            required
            onChange={handleChange}
            defaultValue={states.state}
            name={'state'}
          >
            <option>NUEVO</option>
            <option>USADO</option>
          </Select>
        </div>

        <div>
          <div>
            <Label htmlFor="stock" value="Stock" />
          </div>
          <TextInput
            id="stock"
            type="number"
            value={states.stock}
            name={'stock'}
            min={1}
            max={100}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="longitud" value="Longitud (mm)" />

          <TextInput
            id="longitud"
            placeholder="0"
            required
            type="number"
            value={states.length}
            name={'length'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="ancho" value="Ancho (mm)" />

          <TextInput
            id="ancho"
            placeholder="0"
            required
            type="number"
            value={states.width}
            name={'width'}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="alto" value="Alto (mm)" />

          <TextInput
            id="alto"
            placeholder="0"
            required
            type="number"
            value={states.height}
            name={'height'}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="price" value="Precio $ AR" />

          <TextInput
            id="price"
            placeholder="0"
            required
            type="number"
            value={states.price}
            name={'price'}
            onChange={handleChange}
          />
        </div>
      </div>
      <div id="textarea">
        <div className="mt-4">
          <Label htmlFor="description" value="Descripción" />
        </div>
        <Textarea
          id="description"
          placeholder="Descripción del producto"
          required
          rows={4}
          value={states.description}
          name={'description'}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
