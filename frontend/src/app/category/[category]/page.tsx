'use client';

import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SliderLogos from '@/Components/UI/SliderLogos';

import { useEffect, useState } from 'react';
import { apiClient } from '@/utils/apiClient';

export default function Category({ params }: { params: { category: string } }) {
  const [category, setCategory] = useState<any>({});

  useEffect(() => {
    apiClient
      .get(`/categories/${params.category}`)
      .then((data) => setCategory(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-5 my-5">
        <CardTitle title={category?.attributes?.name} />
        <SliderLogos />
        <CardImg
          title={'REACONDICIONADOS'}
          subTitle={'Productos testeados y con garantía'}
          img={cardImg}
        />
      </div>
    </Layout>
  );
}
