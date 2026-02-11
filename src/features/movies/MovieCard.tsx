import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="group h-full">
      <article className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full flex flex-col bg-gray-800">
        <div className="relative overflow-hidden h-96">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:via-black/40 transition-all duration-500" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
            {movie.title}
          </h2>

          <p className="text-sm text-gray-300 line-clamp-2 mb-4 group-hover:text-gray-200 transition-colors">
            {movie.description}
          </p>

          <div className="flex justify-between items-center gap-2">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
              {movie.genre}
            </span>
            <span className="inline-block text-yellow-400 font-bold text-sm">
              ★ {movie.rating || "N/A"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
