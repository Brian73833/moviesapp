export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <a
          href="/"
          className="text-3xl font-bold tracking-widest bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
        >
          🎬 MyApp
        </a>

        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a
            href="/"
            className="relative px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Home
          </a>

          <a
            href="/movies"
            className="relative px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Movies
          </a>
        </nav>
      </div>
    </header>
  );
}
