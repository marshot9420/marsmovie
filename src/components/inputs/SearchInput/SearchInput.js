import { memo, useState } from "react";

import { useSearchContext } from "../../../hooks";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const { filterCharacters } = useSearchContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    filterCharacters(newSearchTerm);
  };

  return (
    <input
      className={styles.search_input}
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default memo(SearchInput);
