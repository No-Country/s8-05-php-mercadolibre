'use client';

import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SliderLogos from '@/Components/UI/SliderLogos';

import { useEffect, useState } from 'react';
import { apiClient } from '@/utils/apiClient';
import CardCategory from '@/Components/UI/CardCategory';

export default function Category({ params }: { params: { category: string } }) {
  const [category, setCategory] = useState<any>({});
  const [allCategories, setAllCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  const categoryNotExist = () => allCategories.every((item) => item !== params.category);

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
  ) : categoryNotExist() ? (
    <span>
      La categoria {`'`}
      {params.category}
      {`'`} no existe
    </span>
  ) : (
    <Layout>
      <div className="flex flex-col gap-5 my-5">
        <CardTitle title={category?.attributes?.name} />
        <div className="flex flex-wrap mx-5">
          {category.relationships.subcategories.map((item: any) => (
            <CardCategory
              key={item.id}
              title={item.name}
              img={cardImg}
              offer={true}
              descriptionOffer={'20%'}
              route={`/subcategory/${item.slug}`}
            />
          ))}
        </div>
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
