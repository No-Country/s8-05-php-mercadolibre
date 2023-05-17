import LayoutAuth from "@/Components/LayoutAuth";

export default function PhonePage() {
  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Validá tu teléfono</h1>
          <h2>Podrás usarlo para ingresar a tu cuenta</h2>
        </div>
        <input type="text" className="w-full rounded-lg" placeholder="+xx xxx xxx-xxxx" />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full">
        Continuar
      </button>
    </LayoutAuth>
  );
}
