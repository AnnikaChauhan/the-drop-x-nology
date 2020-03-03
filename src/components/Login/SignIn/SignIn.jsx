import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const style = {
    style: {
        color: "white",
        opacity: 0.7
    }
}


class SignIn extends Component {
    render() {
        return (
            <section className={styles.SignInContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.comet1}></div>
                    <form className={styles.loginform}>
                        <TextField id="standard-basic" label="Username" color="secondary" className={styles.textfieldcolor} 
                        InputProps={style}
                        InputLabelProps={style}
                        />
                        <TextField id="standard-basic" label="Password" color="secondary" className={styles.textfieldcolor} 
                        InputProps={style}
                        InputLabelProps={style}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="#e91e63 pink"
                        className={styles.buttons}        
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" className={styles.textlink}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" className={styles.textlink}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </section>
        )
    }
}

export default SignIn;