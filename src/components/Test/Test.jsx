import React, { Component } from 'react';
import styles from './Test.module.scss';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


export default class Test extends Component {
    render() {
        return(
            <form>
            <TextField
            className={styles.bgcol}
            fullWidth
            id="email"
            label="Email Address"
            InputLabelProps={{
                style: {color: "white"}
            }}
            InputProps={{
                style: {color: "white"}
            }}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
            </Grid>
        </form>
        )
    }
}