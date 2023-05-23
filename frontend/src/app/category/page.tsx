'use client';

import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SliderLogos from '@/Components/UI/SliderLogos';

import { useEffect } from 'react';
import { apiClient } from '@/utils/apiClient';

export default function Category() {
  useEffect(() => {
    apiClient
      .get('/categories')
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-5 my-5">
        <CardTitle title={'Tecnologia'} />
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
