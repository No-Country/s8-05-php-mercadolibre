import LayoutAuth from "@/Components/LayoutAuth";

export default function EmailPage() {
  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Agregá tu e-mail</h1>
          <h2>Recibirás información de tu cuenta</h2>
        </div>
        <input type="text" className="w-full rounded-lg" placeholder="usuario@gmail.com" />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full">
        Continuar
      </button>
    </LayoutAuth>
  );
}
