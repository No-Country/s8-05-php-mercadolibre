import CarouselComponent from "@/Components/CarouselComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import Layout from "@/Components/Layout";

export default function Home() {
  const imgs = [
    "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683838084716-home-sliderdesktop2.jpg",
    "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683772259953-ms-desktop-extendimos-hotsale-cuotas.jpg",
    "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683821025709-home-sliderdesktop-sinfijas-peqelectro.jpg",
    "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683821125894-home-sliderdesktop1-full.jpg",
    "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683832284499-msdesktop-samsung-hs.jpg",
  ];

  return (
    <Layout>
      <div>
        <CarouselComponent imgs={imgs} />
      </div>
    </Layout>
  );
}
