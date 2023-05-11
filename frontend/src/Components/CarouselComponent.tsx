import Image from "next/image";

export default function CarouselComponent() {
  return (
    <Image
      src={
        "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683838084716-home-sliderdesktop2.jpg"
      }
      width={1000}
      height={1000}
      alt="Picture of the author"
    />
  );
}
