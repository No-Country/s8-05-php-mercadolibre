'use client';

import { apiClient } from '@/utils/apiClient';
import { Select } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function CategoriesList({ onChange, defaultValue }: any) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient.get(`/categories`).then(({ data }: { data: any }) => {
      const categoriesData = data.data.map((item: any) => ({ name: item.attributes.name }));
      setCategories(categoriesData);
    });
  }, []);

  return (
    <Select
      className="border-none text-sm w-full"
      onChange={onChange}
      name={'category'}
      value={defaultValue}
    >
      <option>Categoría</option>
      {!categories.length ? (
        <option>No hay categorias disponibles</option>
      ) : (
        categories.map((item: any, i: number) => <option key={i}>{item.name}</option>)
      )}
    </Select>
  );
}
