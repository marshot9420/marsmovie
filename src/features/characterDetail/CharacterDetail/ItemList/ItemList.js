import { memo } from "react";

import styles from "./ItemList.module.css";

const ItemList = ({ title, items }) => {
  return (
    <div className={styles.item__list}>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ItemList);
