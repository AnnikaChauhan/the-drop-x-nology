import React from "react";
import styles from "./LoginPage.module.scss";
import ReactFullpage from '@fullpage/react-fullpage';
import SignIn from "../../components/Login/SignIn";
import Details from "../../components/Login/Details";

export default function LoginPage() {
    return (
        <ReactFullpage
            scrollingSpeed={500} /* Options here */
            render={({ fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <section className={styles.pagewrapper}>
                                <SignIn />
                                <div className={styles.footercontainer} onClick={() => fullpageApi.moveSectionDown()}>
                                    Learn more about The Drop.
                                </div>
                            </section>
                        </div>
                        <div className="section">
                            <Details />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}