import { FunctionComponent } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = () => {
  return (
    <div className={styles.logIn}>
      <div className={styles.frameParent}>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.logInChild} />
      <WelcomeMessage />
      <img
        className={styles.chrisLee70l1tdai6rmUnsplashIcon}
        loading="lazy"
        alt=""
        src="/chrislee70l1tdai6rmunsplash-1@2x.png"
      />
    </div>
  );
};

export default LogIn;
