import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div className="flex flex-col gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
