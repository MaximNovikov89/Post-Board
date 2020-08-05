import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import GreetingPage from './components/Greeting-Page/greetingPage';
import SignUp from './components/Sign-Up/SignUp';
import SignIn from './components/Sign-in/Sign-in';
import HomePage from './components/Home-Page/HomePage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import * as actions from './Actions/actions';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            ...userAuth,
            ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, []);
  dispatch({ type: actions.ADD_USER_OBJ, value: currentUser });

  return (

    < HashRouter >
      <Router>
        <Switch>

          {/* <Route exact path="/asdasdas" component={() => { return <Auth /> }} /> */}
          <Route exact path="/" component={() => { return <GreetingPage /> }} />
          <Route exact path="/homepage" component={() => { return <HomePage /> }} />
          <Route exact path='/log-in' component={() => { return <SignIn /> }} />
          <Route exact path='/sign-up' component={() => { return <SignUp /> }} />

        </Switch>
      </Router>
    </HashRouter >

  );
}

export default App;
