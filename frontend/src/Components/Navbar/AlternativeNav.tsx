import Image from "next/image";
import Link from "next/link";

export default function AlternativeNav() {
  return (
    <div className="bg-primary py-2 pl-5">
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
  );
}
