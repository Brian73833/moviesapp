export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-2xl">
        <div className="mb-6">
          <p className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">404</p>
        </div>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-400 sm:text-xl/8">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ir al inicio
          </a>
          <a
            href="/movies"
            className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver películas
          </a>
        </div>
      </div>
    </main>
  );
}
