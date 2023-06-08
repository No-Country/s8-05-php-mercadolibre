import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SliderLogos from '@/Components/UI/SliderLogos';

import { apiClient } from '@/utils/apiClient';
import Category from '@/Components/Product/Category';

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data }: any = await apiClient.get(`/categories`);
  return data.data.map((item: any) => ({ category: item.attributes.slug }));
}

async function getData(slug: string) {
  const { data }: any = await apiClient.get(`/categories/${slug}`);
  return data;
}

export default async function Page({ params }: { params: { category: string } }) {
  const { data } = await getData(params.category);

  return (
    <Layout>
      <div className="flex flex-col gap-5 my-5">
        <CardTitle title={data?.attributes?.name} />
        <div className="flex flex-wrap mx-5">
          {data?.relationships?.subcategories?.map((item: any) => (
            <Category
              key={item.id}
              title={item.name}
              img={cardImg}
              offer={true}
              descriptionOffer={'20%'}
              route={`/category/${params.category}/subcategory/${item.slug}`}
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
