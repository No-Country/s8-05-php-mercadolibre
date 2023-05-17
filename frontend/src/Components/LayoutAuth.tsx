import Image from "next/image";
import Link from "next/link";

import { ReactNode } from "react";

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-primary py-2 pl-5 w-full">
        <Link href={"/"}>
          <Image
            src={
              "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__small.png"
            }
            width={50}
            height={50}
            alt="logo"
          />
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
