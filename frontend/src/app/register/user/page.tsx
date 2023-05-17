import LayoutAuth from "@/Components/LayoutAuth";

export default function UserPage() {
  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Elegí tu nombre</h1>
          <h2>Contanos cómo querés que te llamemos</h2>
        </div>
        <input type="text" className="w-full rounded-lg" placeholder="Nombre" />
        <input type="text" className="w-full rounded-lg" placeholder="Apellido" />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full">
        Continuar
      </button>
    </LayoutAuth>
  );
}
