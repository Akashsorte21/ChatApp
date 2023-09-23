import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import '../App.css';

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '90vh', alignItems: 'center' }}>
       
          <Button className='original-button'  onClick={signInWithGoogle}>Sign In With Google</Button>
  
        </div>
    )
}

export default SignIn

