export function Home() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bienvenido a <span className="text-blue-400">MyApp 🎬</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Explora tus películas favoritas, descubre nuevos títulos y revisa
            todos los detalles en una experiencia moderna y rápida.
          </p>

          <div className="flex gap-4">
            <a
              href="/movies"
              className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Ver Películas
            </a>

            <a
              href="/"
              className="border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition-colors px-6 py-3 rounded-xl"
            >
              Explorar
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
            alt="Cinema"
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
