import { memo } from "react";

import styles from "./CharacterDetail.module.css";

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
          <div className={styles.detail__items__content}>
            <h4>{detail.comics.available} Comics</h4>
            <ul>
              {detail.comics.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detail__items__content}>
            <h4>{detail.series.available} Series</h4>
            <ul>
              {detail.series.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detail__items__content}>
            <h4>{detail.stories.available} Stories</h4>
            <ul>
              {detail.stories.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detail__items__content}>
            <h4>{detail.events.available} Events</h4>
            <ul>
              {detail.events.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
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
