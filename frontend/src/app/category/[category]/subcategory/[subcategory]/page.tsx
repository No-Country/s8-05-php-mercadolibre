import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SubCategory from '@/Components/Product/SubCategory';
import SliderLogos from '@/Components/UI/SliderLogos';

import { apiClient } from '@/utils/apiClient';

type subcategoryProps = {
  params: { subcategory: string; category: string };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data }: any = await apiClient.get(`/subcategories`);
  return data.data.map((item: any) => ({
    category: 'muebles',
    subcategory: item.attributes.slug,
  }));
}

async function getData(category: string, subcategory: string) {
  const { data }: any = await apiClient.get(
    `/categories/${category}/subcategories/${subcategory}/products`,
  );
  return data;
}

export default async function Page({ params }: subcategoryProps) {
  const { data } = await getData(params.category, params.subcategory);

  return (
    <Layout>
      <div className="flex flex-col gap-5 my-5">
        <CardTitle title={'Celulares y smartphones'} />
        <SliderLogos />
        <div className="flex flex-wrap mx-5">
          {data?.data?.length > 0 ? (
            data.data.map((item: any) => (
              <SubCategory
                key={item.id}
                id={item.id}
                title={item.attributes.name}
                img={item.relationships.images[0]}
                leave={'Lleva hoy'}
                store={'Apple Oficial'}
                price={item.attributes.price}
              />
            ))
          ) : (
            <span>Productos no disponibles</span>
          )}
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
