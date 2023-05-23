'use client';

import CarouselComponent from '@/Components/UI/CarouselComponent';
import Layout from '@/Components/Layout';
import CategorySlider from '@/Components/UI/CategorySlider';
import { apiClient } from '@/utils/apiClient';
import { useEffect, useState } from 'react';
import { imgs } from '@/assets/carousel';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient
      .get('/categories')
      .then((data) => setCategories(data.data.data))
      .catch((error) => console.log(error.response.data));
  }, []);

  return (
    <Layout>
      <CarouselComponent imgs={imgs} />
      {categories.length > 0 ? (
        <>
          {categories.map((category: any) => (
            <CategorySlider
              route={`/category`}
              key={category.id}
              title={category.attributes.name}
              products={category.relationships.products}
            />
          ))}
        </>
      ) : (
        <h2 className="text-center my-10">Cargando</h2>
      )}
    </Layout>
  );
}
