import { memo } from "react";

import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <h1 className={styles.loading}>MarsMovie</h1>
    </>
  );
};

export default memo(Loading);
