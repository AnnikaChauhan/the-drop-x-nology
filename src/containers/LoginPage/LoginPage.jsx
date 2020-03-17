import React, { Component } from "react";
import styles from "./LoginPage.module.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import SignIn from "../../components/Login/SignIn";
import Details from "../../components/Login/Details";
import { gsap } from 'gsap';
import { Back } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = gsap.timeline({delay:1.5});
    }

    componentDidMount() {
        this.myTween.to(this.myElement, {y: "-90%", duration: 1, ease: Back.easeOut.config(1.7)});
    }

    render() {
        return (
            <ReactFullpage
                scrollingSpeed={500} /* Options here */
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <section className={styles.pagewrapper}>
                                    <SignIn
                                        //this.signInWithEmailAndPassword?
                                         signInWithEmailAndPassword={this.props.signInWithEmailAndPassword}
                                         setEmail={this.props.email}
                                         setPassword={this.props.password}
                                     />
                                    <div
                                        className={styles.footercontainer}
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                        ref={div => this.myElement = div}
                                    >
                                        <p>Learn more about The Drop</p>
                                        <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faChevronDown} />
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
}