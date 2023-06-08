import Image from 'next/image';

type CardImgProps = {
  title: string;
  subTitle: string;
  img: any;
};

export default function CardImg({ title, subTitle, img }: CardImgProps) {
  return (
    <div className="flex flex-row justify-between bg-card rounded-lg p-5 gap-2 items-center mx-5 md:h-64 h-36">
      <div className="text-white flex flex-col gap-5 pb-5">
        <span className="text-xs font-bold">{title}</span>
        <p className="text-lg font-light">{subTitle}</p>
      </div>
      <Image
        src={img}
        width={200}
        height={100}
        alt="Imagen de tecnologia"
        className="object-cover h-auto"
      />
    </div>
  );
}
