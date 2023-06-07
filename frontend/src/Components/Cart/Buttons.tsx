import Link from 'next/link';

export default function Buttons() {
  return (
    <div className="flex flex-col mx-5 gap-4">
      <div className="flex flex-row w-full justify-between">
        <span>Total de compra:</span>
        <span>AR $ 450.000</span>
      </div>
      <Link href={'/buy'} className="bg-darkBlue text-white rounded-full py-3 text-center">
        Finalizar compra
      </Link>
      <Link
        href={'/'}
        className="bg-white text-darkBlue rounded-full py-3 border-darkBlue border text-center"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
