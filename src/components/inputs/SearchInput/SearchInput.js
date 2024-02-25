import { memo } from "react";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <input
      className={styles.search_input}
      type="text"
      placeholder="Search..."
    />
  );
};

export default memo(SearchInput);
