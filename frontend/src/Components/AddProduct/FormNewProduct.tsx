'use client';

import { Label, TextInput, Select, Textarea} from 'flowbite-react';

import { apiClient } from '@/utils/apiClient';
import { useEffect, useState } from 'react';

/*type NavBackProps = {
  title: string;
};*/

export default function FormNewProduct(
/*{
  title
}: NavBackProps*/
) {
  const [count, setCount] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient
      .get('/home')
      .then((data) => setCategories(data.data.data))
      .catch((error) => console.log(error.response.data));
  }, []);

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
        
        {categories.length > 0 ? (
          <>
          <Select
          id="category"
          required
        >
            {categories.map((category: any) =>
              category.relationships.products.length ? (
                
                  <option>
                  { category.attributes.name }
                  </option>
                
              ) : null,
            )}
            </Select>
          </>
        ) : (
          <Select
            id="category"
            required
          >
            <option>
              Vacio
            </option>
            </Select>
        )}
        
      </div>

      <div id="select">
        <div>
          <Label
            htmlFor="status"
            value="Estado"
          />
        </div>
        <Select
          id="status"
          required
        >
          <option>
            Nuevo
          </option>
          <option>
            Usado
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