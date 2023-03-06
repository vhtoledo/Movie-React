import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movies }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movies.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movies.title}
          className={styles.movieImage}
        />
        <div>{movies.title}</div>
      </Link>
    </li>
  );
};
