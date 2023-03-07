import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
/*import movies from "./movies.json";*/
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie"; 
      get(searchUrl).then((data) => {
          setMovies(data.results);
          setIsLoading(false);
        });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movies) => (
        <MovieCard key={movies.id} movies={movies} />
      ))}
    </ul>
  );
};
