import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.getStartedNowWrapper}>
        <h1 className={styles.getStartedNow}>Get Started Now</h1>
      </div>
      <div className={styles.enterYourCredentials}>
        Enter your Credentials to access your account
      </div>
      <form className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.nameTopPlaceholderParent}>
            <div className={styles.nameTopPlaceholder}>
              <div className={styles.name}>Name</div>
            </div>
            <div className={styles.nameInputPlaceholder}>
              <input
                className={styles.nameInputEnterPlaceholder}
                placeholder="Enter your name"
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.nameWrapper}>
              <div className={styles.name1}>Email address</div>
            </div>
            <div className={styles.frameWrapper}>
              <input
                className={styles.frameChild}
                placeholder="Enter your email"
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.nameContainer}>
              <div className={styles.name2}>Password</div>
            </div>
            <div className={styles.frameWrapper1}>
              <input
                className={styles.frameItem}
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.iAgreeToContainer}>
              {`I agree to the `}
              <span className={styles.termsPolicy}>{`terms & policy`}</span>
            </div>
          </div>
        </div>
        <button className={styles.instanceParent}>
          <div className={styles.frameParent2}>
            <div className={styles.nameFrame}>
              <div className={styles.name3}>Name</div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.nameWrapper1}>
                <div className={styles.name4}>Name</div>
              </div>
            </div>
          </div>
          <div className={styles.loginWrapper}>
            <b className={styles.login}>Signup</b>
          </div>
        </button>
      </form>
      <div className={styles.frameWrapper3}>
        <div className={styles.lineParent}>
          <div className={styles.lineDiv} />
          <div className={styles.orWrapper}>
            <div className={styles.or}>Or</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.frameParent4}>
          <div className={styles.frameWrapper4}>
            <button className={styles.frameButton}>
              <div className={styles.icons8Google1Parent}>
                <img
                  className={styles.icons8Google1}
                  alt=""
                  src="/icons8google-1.svg"
                />
                <div className={styles.signInWithGoogleWrapper}>
                  <div className={styles.signInWith}>Sign in with Google</div>
                </div>
              </div>
            </button>
          </div>
          <button className={styles.frameWrapper5}>
            <div className={styles.icons8AppleLogo1Parent}>
              <img
                className={styles.icons8AppleLogo1}
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className={styles.signInWithAppleWrapper}>
                <div className={styles.signInWith1}>Sign in with Apple</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.frameWrapper6}>
          <div className={styles.frameWrapper7}>
            <div className={styles.haveAnAccountSignInWrapper}>
              <div className={styles.haveAnAccountContainer}>
                <span
                  className={styles.haveAnAccount}
                >{`Have an account?  `}</span>
                <span className={styles.signIn}>Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
