import CarouselComponent from '@/Components/UI/CarouselComponent';
import TabsPay from '@/Components/UI/TabsPay';
import Layout from '@/Components/Layout';
import CategorySlider from '@/Components/UI/CategorySlider';
import { apiClient } from '@/utils/apiClient';
import { imgs } from '@/assets/carousel';

async function getData() {
  const { data } = await apiClient.get('/home');
  return data;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <Layout>
      <CarouselComponent imgs={imgs} />
      <TabsPay/>
      {data.length > 0 ? (
        data.map((category: any) =>
          category.relationships.products.length ? (
            <CategorySlider
              route={`/category/${category.attributes.slug}`}
              key={category.id}
              title={category.attributes.name}
              products={category.relationships.products}
            />
          ) : null,
        )
      ) : (
        <h2 className="text-center my-10">Cargando</h2>
      )}
    </Layout>
  );
}
