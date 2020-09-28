import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {

    //==========States=========//
    const [promiseVarification, setPromiseVarification] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    //==========Methods=========//
    const googleSignIn = async (event) => {
        event.preventDefault();
        let promise;
        promise = await signInWithGoogle();
        setPromiseVarification(promise)
    };

    useEffect(() => {
        if (promiseVarification) {
            history.push('/homepage')
        }
    }, [promiseVarification, history])

    const handleChange = (evt) => {
        setUserInfo({
            ...userInfo,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userInfo;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserInfo({ email: '', password: '' });
            history.push('/homepage');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert("You have not registered yet")
            }
            if (error.code === 'auth/wrong-password') {
                alert("Wrong Password try again")
            }
            else {
                console.log(error);
            }
        }
    }

    const guestLogIn = () => {
        setUserInfo({
            email: 'Guest@mail.com',
            password: 'password'
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                 </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="off"
                        value={userInfo.email}

                    />
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={userInfo.password}

                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Sign In as Guest"
                        onClick={guestLogIn}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={googleSignIn}
                    >
                        Sign In With Google
                    </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                             </Link>
                        </Grid> */}
                        <Grid item>
                            <Link href="#/sign-up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}