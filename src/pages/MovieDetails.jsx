import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
/*import movie from "./movie.json"*/
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setmovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
        setIsLoading(false);
        setmovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner/>
  }

  if (!movie) {
    return null;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
    </div>
  )
}
