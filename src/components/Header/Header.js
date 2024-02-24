import { memo } from "react";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { URLS } from "../../constants/urls";

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
