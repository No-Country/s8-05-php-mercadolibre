'use client';

import { apiClient } from '@/utils/apiClient';
import { Select } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CategoriesList({ onChange, defaultValue, links }: any) {
  const { push } = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient
      .get(`/categories`)
      .then(({ data }: { data: any }) => {
        const categoriesData = data.data.map((item: any) => ({
          name: item.attributes.name,
          slug: item.attributes.slug,
        }));
        setCategories(categoriesData);
      })
      .catch((err) => console.log(err));
  }, []);

  links && (onChange = (e: any) => push(`/category/${e.target.value}`));

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
        categories.map((item: any, i: number) => {
          return links ? (
            <option key={i} value={item.slug}>
              {item.name}
            </option>
          ) : (
            <option key={i}>{item.name}</option>
          );
        })
      )}
    </Select>
  );
}
