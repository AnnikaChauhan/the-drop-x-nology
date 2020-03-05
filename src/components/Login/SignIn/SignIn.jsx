import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import LargeButton from '../../Utility/Button/LargeButton';




class SignIn extends Component {
    render() {
        const gText = (<span>Google</span>)
        return (
            <section className={styles.SignInContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.comet1}></div>
                    <form className={styles.loginform}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control className={styles.formcontain} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control className={styles.formcontain} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check className={styles.radiostyle} type="checkbox" label="Remember me?" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className={styles.loginBtn}>
                                SIGN IN
                            </Button>
                        </Form>
                    </form>
                    <div className={styles.extra}>
                        <div className={styles.link1}>Forgot Password</div>
                        <div className={styles.link2}>New to The Drop?</div>
                    </div>
                    {/* <div className={styles.buttonStyle}>
                        <LargeButton text={`Sign up with Google`} />
                    </div> */}
                </div>

            </section>
        )
    }
}

export default SignIn;