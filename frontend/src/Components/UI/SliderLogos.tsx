import samsung from '@/assets/logos/samsung.png';
import hp from '@/assets/logos/hp.png';
import motorola from '@/assets/logos/motorola.png';
import xiaomi from '@/assets/logos/xiaomi.png';
import Image from 'next/image';

export default function SliderLogos() {
  return (
    <div className="bg-skyBlue mx-5">
      <ul className="flex flex-row overflow-x-auto hiddeScroll pb-2 items-center">
        <li>
          <Image
            src={samsung}
            width={100}
            height={100}
            alt="Logo samsung"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={hp}
            width={100}
            height={100}
            alt="Logo hp"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={motorola}
            width={100}
            height={100}
            alt="Logo motorola"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={xiaomi}
            width={100}
            height={100}
            alt="Logo xiaomi"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={samsung}
            width={100}
            height={100}
            alt="Logo samsung"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={hp}
            width={100}
            height={100}
            alt="Logo hp"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={motorola}
            width={100}
            height={100}
            alt="Logo motorola"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
        <li>
          <Image
            src={xiaomi}
            width={100}
            height={100}
            alt="Logo xiaomi"
            className="w-[50px] min-w-[50px] max-h-[50px] object-contain mx-5"
          />
        </li>
      </ul>
    </div>
  );
}
