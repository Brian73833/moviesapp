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
      <div className="min-h-screen bg-[#070B16] text-white"> Cargando...</div>
    );

  return (
    <div className="min-h screen bg-[#070B16]">
      <MovieList movies={movies} />
    </div>
  );
}
