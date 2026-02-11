export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} MyApp. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Términos
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
