import Image from 'next/image';
import Link from 'next/link';

import { ReactNode } from 'react';

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full flex justify-center mt-20">
        <Link href={'/'} className="flex items-center gap-2">
          <Image
            src={
              'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__small.png'
            }
            width={50}
            height={50}
            alt="logo"
          />
          <span>Mercado Country</span>
        </Link>
      </div>
      <div className="flex flex-row justify-center w-full mt-10">
        <div className="py-10 px-5 flex flex-col gap-10 p-10 lg:bg-white lg:shadow-lg lg:p-14 w-full lg:w-[600px]">
          {children}
        </div>
      </div>
    </>
  );
}
