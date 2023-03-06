import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css"

export const MoviesGrid = () => {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movies) => (
         <MovieCard key={movies.id} movies={movies}/>
      ))}
    </ul>
  )
}
