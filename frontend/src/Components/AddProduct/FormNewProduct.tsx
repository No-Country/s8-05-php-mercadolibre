import { Label, TextInput, Select, Textarea} from 'flowbite-react';
import { useState } from 'react';

/*type NavBackProps = {
  title: string;
};*/

export default function FormNewProduct(
/*{
  title
}: NavBackProps*/
) {
  const [count, setCount] = useState(1);
  return (
  <form>
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <Label
          htmlFor="itutlo"
          value="Título"
        />
      
        <TextInput
          id="email1"
          placeholder="Iphone"
          required
          type="text"
        />
      </div>
      <div id="select">
        <div>
          <Label
            htmlFor="category"
            value="Categoría"
          />
        </div>
        <Select
          id="countries"
          required
        >
          <option>
            United States
          </option>
          <option>
            Canada
          </option>
          <option>
            France
          </option>
          <option>
            Germany
          </option>
        </Select>
      </div>

      <div id="select">
        <div>
          <Label
            htmlFor="status"
            value="Estado"
          />
        </div>
        <Select
          id="countries"
          required
        >
          <option>
            United States
          </option>
          <option>
            Canada
          </option>
          <option>
            France
          </option>
          <option>
            Germany
          </option>
        </Select>
      </div>

      <div>
        <div>
          <Label
            htmlFor="stock"
            value="Stock"
          />
        </div>
        <TextInput
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          min={1}
          max={100}
        />
      </div>

      <div>
        <Label
          htmlFor="longitud"
          value="Longitud (mm)"
        />
      
        <TextInput
          id="longitud"
          placeholder="0"
          required
          type="number"
        />
      </div>

      <div>
        <Label
          htmlFor="ancho"
          value="Ancho (mm)"
        />
      
        <TextInput
          id="ancho"
          placeholder="0"
          required
          type="number"
        />
      </div>

      <div>
        <Label
          htmlFor="alto"
          value="Alto (mm)"
        />
      
        <TextInput
          id="alto"
          placeholder="0"
          required
          type="number"
        />
      </div>
      <div>
        <Label
          htmlFor="price"
          value="Precio $ AR"
        />
      
        <TextInput
          id="price"
          placeholder="0"
          required
          type="text"
        />
      </div>
    </div>
    <div id="textarea">
        <div className='mt-4'>
          <Label
            htmlFor="description"
            value="Descripción"
          />
        </div>
        <Textarea
          id="description"
          placeholder="Descripción del producto"
          required
          rows={4}
        />
      </div>
  </form>
  );
}