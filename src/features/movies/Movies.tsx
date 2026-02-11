import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.service";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">
            Cargando películas...
          </p>
        </div>
      </div>
    );

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
