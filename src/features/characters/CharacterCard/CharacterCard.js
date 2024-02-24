import { memo } from "react";

import { formatDate } from "../../../utils/format";

import styles from "./CharacterCard.module.css";

const CharacterCard = ({ id, name, thumbnail, modified }) => {
  const date = formatDate(modified);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={thumbnail} alt="Thumbnail" />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <small>{date}</small>
      </div>
    </div>
  );
};

export default memo(CharacterCard);
