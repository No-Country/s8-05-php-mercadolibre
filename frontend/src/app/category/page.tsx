import Layout from '@/Components/Layout';

import cardImg from '@/assets/card/tecnologia.png';
import CardTitle from '@/Components/UI/CardTitle';
import CardImg from '@/Components/UI/CardImg';
import SliderLogos from '@/Components/UI/SliderLogos';

export default function Category() {
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
