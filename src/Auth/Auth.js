import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import { auth } from '../firebase'
import GreetingPage from '../Greeting-Page/greetingPage';
import SignUp from '../Sign-Up/signUp';
import SignIn from '../Sign-in/Sign-in';

export default function Auth() {
    const [user, setUser] = useState(true);

    // useEffect(() => {
    //     auth().onAuthStateChanged()

    // }, [])


    if (!user) return (
        < HashRouter >
            <Router>
                <Switch>


                    <Route exact path="/" component={() => { return <GreetingPage /> }} />
                    <Route exact path='/sign-in' component={() => { return <SignIn /> }} />
                    <Route exact path='/sign-up' component={() => { return <SignUp /> }} />

                </Switch>
            </Router>
        </HashRouter >
    )
    else {
        return (
            < HashRouter >
                <Router>
                    <Switch>
                        <Route exact path='/' component={() => { return <SignIn /> }} />
                    </Switch>
                </Router>
            </HashRouter >
        )

    }


}
