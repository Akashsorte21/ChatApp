import React from 'react'
import Signin from './components/Signin'
import Chat from './components/Chat'
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <Signin />}
    </>
  );
}


export default App;