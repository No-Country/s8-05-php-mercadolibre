import LayoutAuth from "@/Components/LayoutAuth";

export default function PasswordPage() {
  return (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Creá tu contraseña</h1>
          <h2>Mantendrás tu cuenta protegida</h2>
        </div>
        <input type="text" className="w-full rounded-lg" placeholder="********" />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full">
        Continuar
      </button>
    </LayoutAuth>
  );
}
