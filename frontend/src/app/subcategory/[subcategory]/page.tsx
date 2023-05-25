'use client';

import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import CardSubCategory from '@/Components/UI/CardSubCategory';
import SliderLogos from '@/Components/UI/SliderLogos';

import { useEffect, useState } from 'react';
import { apiClient } from '@/utils/apiClient';

export default function Category({ params }: { params: { subcategory: string } }) {
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
    //AJUSTAR RUTA DE API Y RENDERIZADO DINAIMCO
    apiClient
      .get(`/subcategories/${params.subcategory}`)
      .then((data) => setSubcategory(data.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [params.subcategory]);

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
          {Array.from({ length: 4 }).map((_, index) => (
            <CardSubCategory
              key={index}
              title={'Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"'}
              img={cardImg}
              leave={'Lleva hoy'}
              store={'Apple Oficial'}
              price={'131,999.00'}
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
