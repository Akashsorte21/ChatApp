import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

const Signout = () => {
    return (
        <div>
            <Button style={{background: '#00d4ff', color: '#fff', borderRadius: '50px'}} onClick = {() => auth.signOut()}>Sign Out</Button>
        </div>
      )
}

export default Signout