import { memo } from "react";

import styles from "./CharacterDetail.module.css";
import ItemList from "./ItemList/ItemList";

const CharacterDetail = ({ detail }) => {
  return (
    <div className={styles.detail}>
      <div className={styles.detail__inner}>
        <h1>{detail.name}</h1>

        <div className={styles.detail__profile}>
          <img
            className={styles.detail__profile__image}
            src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
            alt="Thumbnail"
          />
          <div className={styles.detail__profile__content}>
            <h4>Description</h4>
            {detail.description ? (
              <p>{detail.description}</p>
            ) : (
              <p>No Description Available</p>
            )}
          </div>
        </div>

        <div className={styles.detail__items}>
          <ItemList
            title={`${detail.comics.available} Comics`}
            items={detail.comics.items}
          />
          <ItemList
            title={`${detail.series.available} Series`}
            items={detail.series.items}
          />
          <ItemList
            title={`${detail.stories.available} Stories`}
            items={detail.stories.items}
          />
          <ItemList
            title={`${detail.events.available} Events`}
            items={detail.events.items}
          />
        </div>

        <div className={styles.detail_links}>
          <h4>Links</h4>
          <ul>
            {detail.urls.map((url) => (
              <li key={url.type}>
                <a href={url.url} target="_blank" rel="noreferrer">
                  #{url.type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(CharacterDetail);
