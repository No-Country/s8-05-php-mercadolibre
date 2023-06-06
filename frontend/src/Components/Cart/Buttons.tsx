export default function Buttons() {
  return (
    <div className="flex flex-col mx-5 gap-4">
      <div className="flex flex-row w-full justify-between">
        <span>Total de compra:</span>
        <span>AR $ 450.000</span>
      </div>
      <button className="bg-darkBlue text-white rounded-full py-3">Finalizar compra</button>
      <button className="bg-white text-darkBlue rounded-full py-3 border-darkBlue border">
        Seguir comprando
      </button>
    </div>
  );
}
