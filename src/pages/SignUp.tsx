import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <div className={styles.frameWrapper}>
          <GroupComponent />
        </div>
      </div>
      <img
        className={styles.chrisLee70l1tdai6rmUnsplashIcon}
        loading="lazy"
        alt=""
        src="/chrislee70l1tdai6rmunsplash-1@2x.png"
      />
    </div>
  );
};

export default SignUp;
