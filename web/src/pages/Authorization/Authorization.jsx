import React from "react";
import styles from "./Authorization.module.scss";
import AuthorRegistrar from "../../components/AuthorRegistrar/AuthorRegistrar";

function Authorization() {
  return (
    <div className={styles.Authorization}>
      <AuthorRegistrar />
    </div>
  );
}

export default Authorization;
