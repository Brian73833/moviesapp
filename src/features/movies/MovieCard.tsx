import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="group">
      <article className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-96 object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-0 p-5 text-white backdrop-blur-sm bg-black/30 w-full">
          <h2 className="text-xl font-bold mb-1">{movie.title}</h2>

          <p className="text-sm text-gray-300 line-clamp-2">
            {movie.description}
          </p>

          <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
            <span className="bg-white/20 px-2 py-1 rounded-full">
              {movie.genre}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
