export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">🎬 MyApp</h2>
          <p className="text-sm text-gray-400">
            Descubre y explora tus películas favoritas con una experiencia
            moderna y rápida.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/movies"
                className="hover:text-blue-400 transition-colors"
              >
                Películas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MyApp. Todos los derechos reservados.
      </div>
    </footer>
  );
}
