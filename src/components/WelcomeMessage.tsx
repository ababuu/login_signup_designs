import { FunctionComponent } from "react";
import styles from "./WelcomeMessage.module.css";

export type WelcomeMessageType = {
  className?: string;
};

const WelcomeMessage: FunctionComponent<WelcomeMessageType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.welcomeMessage, className].join(" ")}>
      <div className={styles.welcomeBack}>
        <h1 className={styles.welcomeBack1}>Welcome back!</h1>
        <h2 className={styles.enterYourCredentials}>
          Enter your Credentials to access your account
        </h2>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.nameInput}>
          <div className={styles.nameFieldLabelParent}>
            <div className={styles.nameFieldLabel}>
              <h3 className={styles.name}>Email address</h3>
            </div>
            <div className={styles.nameInputWrapper}>
              <input
                className={styles.nameInput1}
                placeholder="Enter your email"
                type="text"
              />
            </div>
          </div>
          <div className={styles.forgotPasswordLink}>
            <div className={styles.passwordFieldLabelParent}>
              <div className={styles.passwordFieldLabel}>
                <h3 className={styles.name1}>Password</h3>
              </div>
              <div className={styles.passwordInputWrapper}>
                <input
                  className={styles.passwordInput}
                  placeholder="Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.socialLogin}>
              <div className={styles.forgotPassword}>forgot password</div>
            </div>
          </div>
          <div className={styles.signUpLink}>
            <div className={styles.backgroundImage}>
              <div className={styles.backgroundImageChild} />
            </div>
            <div className={styles.rememberFor30}>Remember for 30 days</div>
          </div>
        </div>
        <div className={styles.loginFormInner}>
          <button className={styles.instanceParent}>
            <div className={styles.frameParent}>
              <div className={styles.nameWrapper}>
                <div className={styles.name2}>Name</div>
              </div>
              <div className={styles.loginButtonBackground}>
                <div className={styles.nameContainer}>
                  <div className={styles.name3}>Name</div>
                </div>
              </div>
            </div>
            <div className={styles.loginWrapper}>
              <b className={styles.login}>Login</b>
            </div>
          </button>
        </div>
        <div className={styles.divider}>
          <div className={styles.orWrapper}>
            <div className={styles.or}>Or</div>
          </div>
        </div>
      </form>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <button className={styles.socialLoginButtons}>
            <div className={styles.socialLoginButtonLabels}>
              <img
                className={styles.icons8Google1}
                alt=""
                src="/icons8google-1.svg"
              />
              <div className={styles.signInWith}>Sign in with Google</div>
            </div>
          </button>
          <button className={styles.socialLoginButtons1}>
            <div className={styles.icons8AppleLogo1Parent}>
              <img
                className={styles.icons8AppleLogo1}
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className={styles.signInWith1}>Sign in with Apple</div>
            </div>
          </button>
        </div>
        <div className={styles.dontHaveAnAccountSignUpWrapper}>
          <h3 className={styles.dontHaveAnContainer}>
            <span
              className={styles.dontHaveAn}
            >{`Don’t have an account?  `}</span>
            <span className={styles.signUp}>Sign Up</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
