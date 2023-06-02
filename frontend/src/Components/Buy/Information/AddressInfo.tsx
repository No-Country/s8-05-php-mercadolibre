
export default function AddressInfo() {
  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 border-black border box-content rounded-lg">
        <h1 className="font-bold">
          Domicilio y télefono
        </h1>
        <div className="text-sm mt-3 pb-3 border-b-2">
          <p>
            Calle y avenida
          </p>
          <p>Teléfono</p>
          <p>Comentarios: aditionalDescription</p>
        </div>
       
        <button
          className="bg-transparent text-darkBlue text-xs rounded py-2"
        >
          Cambiar de domicilio
        </button>
      </div>
    </>
  );
}
