import { memo } from "react";

import { Link } from "react-router-dom";

import { formatDate } from "../../../utils/format";

import styles from "./CharacterCard.module.css";
import { URLS } from "../../../constants/urls";

const CharacterCard = ({ character }) => {
  const { id, name, modified, thumbnail } = character;

  return (
    <Link to={`${URLS.CLIENT.CHARACTER}/${id}`}>
      <div className={styles.card}>
        <div className={styles.content}>
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="Thumbnail"
          />
        </div>
        <div className={styles.content}>
          <h4>{name}</h4>
          <small>{formatDate(modified)}</small>
        </div>
      </div>
    </Link>
  );
};

export default memo(CharacterCard);
