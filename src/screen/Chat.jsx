import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import '../styles/Chat.css';
import Navbar from '../components/Navbar2';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';


function Chat() {
    const [newMessage, setnewMessage] = useState("")
    const [messages, setmessages] = useState([])
    // let { userName, room } = useParams();
    const userName = localStorage.getItem("userName");
    const room = localStorage.getItem("room");

    const msgRef = useRef(null)

    let uid;

    const messageRef = collection(db, "messages")

    useEffect(() => {
      const queryMessages = query(messageRef, where("room", "==", room),
      orderBy("createdAt"));
      onSnapshot(queryMessages, (snapshot) => {
        let messages = [];
        snapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setmessages(messages);
        uid = auth.currentUser.uid;
      })
    }, [])
    
    useEffect(() => {
      // 👇️ scroll to bottom every time messages change
      msgRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);
  
    const sendFunction = async (e) => {
        e.preventDefault();

        if (newMessage === "") return;

        await addDoc(messageRef,{
            text: newMessage,
            createdAt: serverTimestamp(),
            user: userName,
            room: room
        })

        setnewMessage("");
    }

  return (
    <div>
      <Navbar />
      <div className="msgboxContainer">
        <div className="msgBox chatBg">
      <div className="displayMessage">
        {
          messages.length >= 1 ? (
            <>
            {
              messages.map ((message)=><span className='msg_'> <span className='msg'><div className="user"><b>{message.user} </b> :</div> {message.text}</span> <br /> <br /> </span>)
            }
            </>
          )     
          :
          (
            <>
            NO MESSAGES
            </>
          )
        }
        <div ref={msgRef} />
      </div>
        <form action="" className="messageForm" onSubmit={sendFunction}>
            <input type="text" name="newMessage" id="newMessage" className='newMessage' placeholder='Message' onChange={(e) => { setnewMessage(e.target.value) }} value={newMessage}/>
            <input type="submit" className='submit' value="Send" />
        </form>

        </div>
        </div>
        {/* <div className="invite"><a href="https://clgcodeforcoolage.netlify.app/" target='blank'>Invite Your Friends</a></div> */}
    </div>
  )
}

export default Chat