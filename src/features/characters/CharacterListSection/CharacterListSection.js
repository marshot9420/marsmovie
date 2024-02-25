import { memo, useEffect, useState } from "react";

import { Loading } from "../../../components";
import { URLS } from "../../../constants/urls";

import { CharacterCard } from "../CharacterCard";

import styles from "./CharacterListSection.module.css";

const CharacterListSection = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchCharacterList = async () => {
    const json = await (await fetch(URLS.API.CHARACTERS)).json();

    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacterList();
  }, []);

  return (
    <div className={styles.section_container}>
      <section className={styles.section}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                modified={character.modified}
                thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default memo(CharacterListSection);
