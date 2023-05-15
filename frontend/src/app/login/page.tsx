export default function Login() {
  return (
  <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form className="w-full max-w-md">
          <h1 className="mt-3 text-2xl text-center font-semibold capitalize sm:text-3xl">Mercado Country</h1>

          <h2 className="mt-6 text-xl font-semibold sm:text-2xl">Ingresa tú email, teléfono o usuario</h2>

          <div className="relative flex items-center mt-8">
            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Escribe tu e-mail, teléfono o usuario"></input>
          </div>

          <div className="relative flex items-center mt-4">
            <input type="password" className="block w-full  py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Contraseña"></input>
          </div>

          <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg hover:bg-blue focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50">
                Continuar
              </button>

              <div className="mt-6 text-center ">
                  <a href="#" className="text-sm text-blue-500 hover:underline ">
                    ¿No tienes cuenta?, Registrate
                  </a>
              </div>
          </div>
      </form>
    </div>
  );
}
