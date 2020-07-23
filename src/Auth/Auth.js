import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.utils'
import HomePage from '../Home-Page/HomePage';
import GreetingPage from '../Greeting-Page/greetingPage';
import SignIn from '../Sign-in/Sign-in';

export default function Auth() {
    const [user, setUser] = useState(true);

    // useEffect(() => {
    //     auth().onAuthStateChanged()

    // }, [])


    if (!user) return (
        <GreetingPage />
    )
    else {
        return (
            <SignIn />
        )

    }


}
