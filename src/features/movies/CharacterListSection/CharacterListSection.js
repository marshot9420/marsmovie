import { memo, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { URLS } from "../../../constants/urls";

import { CharacterCard } from "../CharacterCard";

import styles from "./CharacterListSection.module.css";

const CharacterListSection = ({ children }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const json = await (await fetch(URLS.API.CHARACTERS)).json();
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
          <Link to={`${URLS.CLIENT.CHARACTER}/${id}`}>
            {movies.map((movie) => (
              <CharacterCard
                key={movie.id}
                id={movie.id}
                name={movie.name}
                modified={movie.modified}
                thumbnail={`${movie.thumbnail.path}.${movie.thumbnail.extension}`}
              />
            ))}
          </Link>
        )}
      </section>
    </div>
  );
};

export default memo(CharacterListSection);
