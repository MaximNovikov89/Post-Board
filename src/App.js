import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import GreetingPage from './components/Greeting-Page/greetingPage';
import SignUp from './components/Sign-Up/SignUp';
import SignIn from './components/Sign-in/Sign-in';
import HomePage from './components/Home-Page/HomePage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import firebase from "firebase/app";
import { useDispatch } from 'react-redux';
import * as userAuthAction from './store/actions/userAuth';
import * as getPostsAction from './store/actions/getPosts';
import * as getUsersAction from './store/actions/getUsers';



function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPostsAction.getPosts());
    dispatch(getUsersAction.getUsers());
    let currentUser;
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // setCurrentUser({
          //   ...userAuth,
          //   ...snapShot.data()
          // });
          currentUser = { ...userAuth, ...snapShot.data() };
          dispatch(userAuthAction.setCurrentUser(currentUser));
        });
      }
      else {
        currentUser = userAuth
        dispatch(userAuthAction.setCurrentUser(currentUser));
      }
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, [dispatch]);



  // useEffect(() => {
  //   //tries to access Users Collection and storing users Array in the Store.
  //   try {

  //     firebase
  //       .firestore()
  //       .collection(`users`)
  //       .get()
  //       .then(function (doc) {
  //         let userArr = doc.docs.map(user => user.data());
  //         dispatch({ type: actions.SET_FRIENDS_LIST, value: userArr });
  //       })
  //       .catch(function (error) {
  //         console.log("Error getting document:", error);
  //       })
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }

  // }, [currentUser]);

  return (
    < HashRouter >
      <Router>
        <Switch>

          <Route exact path="/" key='1' component={() => { return <GreetingPage /> }} />
          <Route exact path="/homepage" key='2' component={() => { return <HomePage /> }} />
          <Route exact path='/log-in' key='3' component={() => { return <SignIn /> }} />
          <Route exact path='/sign-up' key='4' component={() => { return <SignUp /> }} />

        </Switch>
      </Router>
    </HashRouter >

  );
}

export default App;
