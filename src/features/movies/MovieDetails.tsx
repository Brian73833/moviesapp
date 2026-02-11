import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMovieById } from "../../services/movies.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getMovieById(id)
      .then((movie) => setMovie(movie))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!movie) return <div>Pelicula no encontrada</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{movie.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>🎭 {movie.genre}</span>
            <span>📅 {movie.year}</span>
            {movie.duration && <span>⏱ {movie.duration} min</span>}
            <span>⭐ {movie.rating}/10</span>
          </div>

          {movie.director && (
            <p className="text-gray-700">
              🎬 <span className="font-semibold">Director:</span>{" "}
              {movie.director}
            </p>
          )}

          {movie.description && (
            <p className="text-gray-600 leading-relaxed">{movie.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
