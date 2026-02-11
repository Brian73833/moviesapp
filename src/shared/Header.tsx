export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors"
        >
          🎬 MyApp
        </a>

        <nav className="flex gap-6 text-lg">
          <a
            href="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </a>

          <a
            href="/movies"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Movies
          </a>
        </nav>
      </div>
    </header>
  );
}
