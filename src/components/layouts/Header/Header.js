import { memo } from "react";

import { Link } from "react-router-dom";

import { URLS } from "../../../constants/urls";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={URLS.CLIENT.HOME}>
        <h3 className={styles.header__title}>MarsMovie</h3>
      </Link>
    </header>
  );
};

export default memo(Header);
