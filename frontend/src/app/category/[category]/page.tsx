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
  const [allCategories, setAllCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    apiClient
      .get(`/categories`)
      .then((data) => data.data.data.map((item: any) => item.attributes.slug))
      .then((res) => setAllCategories(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    apiClient
      .get(`/categories/${params.category}`)
      .then((data) => setCategory(data.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [params.category]);

  return loader ? (
    <span>Cargando</span>
  ) : allCategories.includes(params.category) ? (
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
  ) : (
    <span>La categoria {params.category} no existe</span>
  );
}
