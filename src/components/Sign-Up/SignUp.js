import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useHistory } from 'react-router-dom'


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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        photoURL: 'https://www.jumpstarttech.com/files/2018/08/Network-Profile.png',
        friends: []
    });
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }
    //Sign-Up with email/Password firebase
    const handleSignUp = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword, photoURL } = userInfo;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password).catch(function (error) { console.log(error); });

            await createUserProfileDocument(user, { displayName, photoURL });

            setUserInfo({});
            history.push('/log-in');
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    alert("Email adress incorrect")
                    history.push("/sign-up");
                    break;
                case 'auth/email-already-in-use':
                    alert("Email already in use")
                    history.push("/sign-up");
                    break;
                case 'auth/weak-password':
                    alert('Password must be at least 8 characters long')
                    history.push("/sign-up");
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSignUp}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="displayName"
                                variant="outlined"
                                required
                                fullWidth
                                label="First Name"
                                // value={userInfo.displayName}
                                autoFocus
                                onChange={handleInputChange}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/log-in" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}