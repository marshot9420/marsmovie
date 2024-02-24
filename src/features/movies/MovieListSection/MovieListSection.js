import { memo, useEffect, useState } from "react";

import { URLS } from "../../../constants/urls";

import { MovieCard } from "../MovieCard";
import styles from "./MovieListSection.module.css";

const MovieListSection = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const json = await (await fetch(URLS.API.MOVIES)).json();
    console.log(json.data.results);
    setMovies(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.section_container}>
      <section className={styles.section}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                name={movie.name}
                modified={movie.modified}
                thumbnail={`${movie.thumbnail.path}.${movie.thumbnail.extension}`}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default memo(MovieListSection);
