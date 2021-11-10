import React, { useState } from "react";

import { googleSignIn, useStyles } from "./SignUpStyles";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useHistory, useLocation } from "react-router";
import { firebaseConfig } from "./firebaseConfig";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { login } from "../../redux/actions/action";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    Password: "",
    orders: [],
    error: "",
    isValid: true,
  });
  //   const [user, setUser] = useContext(UserContext);
  //   const getResponse = (res) => {
  //     setUser(res);
  //     setNewUser(res);
  //     if (!user.error) {
  //       history.replace(from);
  //     }
  //   };
  const classes = useStyles();

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        ...newUser,
        name: res.displayName,
        email: res.email,
      };
      firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem("token", idToken);
          // ...
        })
        .catch(function (error) {
          // Handle error
        });
      dispatch(login(userInfo));
      // //   getResponse(userInfo);
    });
  };

  const handleInput = (e) => {
    const userInfo = { ...newUser };
    if (e.target.name === "email") {
      userInfo.isValid = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value)
        ? true
        : false;
    }
    userInfo[e.target.name] = e.target.value;
    setNewUser(userInfo);
  };
  const handleSignUp = (e) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((userCredential) => {
        const res = userCredential.user;

        const userInfo = {
          ...newUser,
          name: newUser.name,
          email: res.email,
        };
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            // Send token to your backend via HTTPS

            sessionStorage.setItem("token", idToken);
            // ...
          })
          .catch(function (error) {
            console.log(error);
          });
        dispatch(login(userInfo));
        // // getResponse(userInfo);
      })
      .catch((res) => {
        const userInfo = { ...newUser };
        userInfo.error = res.message;
        setNewUser(userInfo);
      });

    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={(classes.form, "text-center")} onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label=" Name"
                autoFocus
                onBlur={handleInput}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onBlur={handleInput}
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
                id="password"
                autoComplete="current-password"
                onBlur={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoogleSignIn}
          >
            <br />
            <FontAwesomeIcon icon={faGoogle} />
            Sign In with Google
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default Login;
