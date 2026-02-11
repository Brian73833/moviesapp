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
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!movie)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <p className="text-white text-2xl font-semibold">
          Película no encontrada
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
            <div className="md:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-center gap-6 text-white">
              <div>
                <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {movie.title}
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-blue-500/20 border border-blue-500/50 text-blue-300 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                  🎭 {movie.genre}
                </span>
                <span className="bg-purple-500/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                  📅 {movie.year}
                </span>
                {movie.duration && (
                  <span className="bg-orange-500/20 border border-orange-500/50 text-orange-300 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    ⏱ {movie.duration} min
                  </span>
                )}
                <span className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                  ⭐ {movie.rating || "N/A"}/10
                </span>
              </div>

              {movie.director && (
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-400 text-sm mb-1">Dirigida por</p>
                  <p className="text-white text-lg font-semibold">
                    🎬 {movie.director}
                  </p>
                </div>
              )}

              {movie.description && (
                <div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {movie.description}
                  </p>
                </div>
              )}

              <div className="pt-4">
                <a
                  href="/movies"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ← Volver a películas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
