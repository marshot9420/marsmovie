import { memo } from "react";

import { Loading } from "../../../components";
import { useSearchContext } from "../../../hooks";

import { CharacterCard } from "../CharacterCard";

import styles from "./CharacterListSection.module.css";

const CharacterListSection = () => {
  const { characters, loading } = useSearchContext();

  return (
    <div className={styles.section_container}>
      <section className={styles.section}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default memo(CharacterListSection);
