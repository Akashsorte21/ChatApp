import React, {useState} from 'react'
import { db, auth } from '../firebase'
import { Input, Button } from '@material-ui/core'
import firebase from 'firebase/compat/app'


function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("");
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%' , color: '#fff' , fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-20px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '28%', background: '#333340', color: '#fff' , borderRadius: '50px', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage