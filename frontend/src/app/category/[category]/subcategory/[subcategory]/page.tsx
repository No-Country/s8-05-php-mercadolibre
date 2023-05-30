'use client';

import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SubCategory from '@/Components/Product/SubCategory';
import SliderLogos from '@/Components/UI/SliderLogos';

import { useEffect, useState } from 'react';
import { apiClient } from '@/utils/apiClient';

export default function Page({ params }: { params: { subcategory: string; category: string } }) {
  const [subcategory, setSubcategory] = useState<any>({});
  const [allSubcategories, setAllSubcategories] = useState([]);
  const [loader, setLoader] = useState(true);

  const categoryNotExist = () => allSubcategories.every((item) => item !== params.subcategory);

  useEffect(() => {
    apiClient
      .get(`/subcategories`)
      .then((data) => data.data.data.map((item: any) => item.attributes.slug))
      .then((res) => setAllSubcategories(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    apiClient
      .get(`/categories/${params.category}/subcategories/${params.subcategory}/products`)
      .then((data) => setSubcategory(data.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [params.subcategory, params.category]);

  return loader ? (
    <span>Cargando</span>
  ) : categoryNotExist() ? (
    <span>
      La subcategoria {`'`}
      {params.subcategory}
      {`'`} no existe
    </span>
  ) : (
    <Layout>
      <div className="flex flex-col gap-5 my-5">
        <CardTitle title={'Celulares y smartphones'} />
        <SliderLogos />
        <div className="flex flex-wrap mx-5">
          {subcategory.data.map((item: any) => (
            <SubCategory
              key={item.id}
              id={item.id}
              title={item.attributes.name}
              img={item.relationships.images[0]}
              leave={'Lleva hoy'}
              store={'Apple Oficial'}
              price={item.attributes.price}
            />
          ))}
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
