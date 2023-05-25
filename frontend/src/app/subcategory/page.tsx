'use client';

import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import CardSubCategory from '@/Components/UI/CardSubCategory';
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
        <CardTitle title={'Celulares y smartphones'} />
        <SliderLogos />
        <div className="flex flex-wrap mx-5">
          {
            Array.from({ length: 4 }).map((_, index) => (
              <CardSubCategory
                key={index}
                title={'Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"'}
                img={cardImg}
                leave={'Lleva hoy'}
                store = {'Apple Oficial'}
                price = {'131,999.00'}
              />
            ))
          }
        </div>
        <CardImg
          title={'REACONDICIONADOS'}
          subTitle={'Productos testeados y con garantía'}
          img={cardImg}
        />
      </div>
    </Layout>
  );
}
