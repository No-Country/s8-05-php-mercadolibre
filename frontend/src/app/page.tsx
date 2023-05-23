'use client';

import CarouselComponent from '@/Components/UI/CarouselComponent';
import Layout from '@/Components/Layout';
import CategorySlider from '@/Components/UI/CategorySlider';
import { apiClient } from '@/utils/apiClient';
import { useEffect, useState } from 'react';

export default function Home() {
  const imgs = [
    'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683838084716-home-sliderdesktop2.jpg',
    'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683772259953-ms-desktop-extendimos-hotsale-cuotas.jpg',
    'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683821025709-home-sliderdesktop-sinfijas-peqelectro.jpg',
    'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683821125894-home-sliderdesktop1-full.jpg',
    'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683832284499-msdesktop-samsung-hs.jpg',
  ];

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
