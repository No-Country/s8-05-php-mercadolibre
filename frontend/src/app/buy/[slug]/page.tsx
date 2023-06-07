import View from '@/Components/Buy/View';
import { apiClient } from '@/utils/apiClient';
import Link from 'next/link';

async function getData(slug: string) {
  try {
    const { data }: any = await apiClient.get(`/products/${slug}`);
    return data;
  } catch (err: any) {
    return err.data;
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  if (params.slug === 'cart') {
    const data: any = {};
    return <View product={{ product: data.data, fastBuy: false }} />;
  } else {
    const data = await getData(params.slug);

    return data ? (
      <View product={{ product: data.data, fastBuy: true }} />
    ) : (
      <div className="w-10/12 h-screen justify-center items-center flex flex-col gap-5 mx-auto">
        <span className="text-3xl">ERROR - El producto no existe</span>
        <div className="flex gap-5">
          <Link href={'/'}>Ir a comprar</Link>
        </div>
      </div>
    );
  }
}
