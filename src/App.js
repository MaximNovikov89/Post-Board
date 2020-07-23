import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Auth from './Auth/Auth';
import GreetingPage from './Greeting-Page/greetingPage';
import SignUp from './Sign-Up/signUp';
import SignIn from './Sign-in/Sign-in';
import HomePage from './Home-Page/HomePage';
import { auth } from './firebase/firebase.utils';
import { Button } from 'reactstrap';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (

    < HashRouter >
      <Router>
        <Button color='danger' onClick={() => auth.signOut()}>Sign Out</Button>
        <Switch>

          <Route exact path="/" component={() => { return <Auth /> }} />
          <Route exact path="/greetingPage" component={() => { return <GreetingPage /> }} />
          <Route exact path="/homepage" component={() => { return <HomePage /> }} />
          <Route exact path='/sign-in' component={() => { return <SignIn /> }} />
          <Route exact path='/sign-up' component={() => { return <SignUp /> }} />

        </Switch>
      </Router>
    </HashRouter >

  );
}

export default App;
