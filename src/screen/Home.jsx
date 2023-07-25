import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/Login.css";
import Marquee from "react-fast-marquee";

function Home() {
    const navigate = useNavigate();

    const [userName, setuserName] = useState("");
    const [room, setroom] = useState("");


    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate('/login')
        }
    });
    }, [auth])
    

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log(auth)
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        localStorage.setItem("userName", userName);
        localStorage.setItem("room", room);
    }, [userName, room])
    


    const chatRoom =  () => {
        navigate('/chat');
    }

    return ( 
        <>
        <Navbar />
      
      
        <div className="loginboxContainer">
                <div className="loginbox">
                    <form action="" className="loginForm" onSubmit={chatRoom}>
                        <div className="email">
                            <label htmlFor="">Enter as: </label>
                            <input type="text" name="userName" id="userName" onChange={(e) => setuserName(e.target.value)} />
                        </div>
                        <div className="password">
                            <label htmlFor="">Code : </label>
                            <input type="text" name="Code" id="Code" onChange={(e) => setroom(e.target.value)} />
                        </div>
                        <div className="btn">
                        <span className="submit">
                            <button type='submit' className='submitBtn'>Get Into The Room</button>
                        </span>
                        </div>
                        <div className="_link"> <a href="https://clgcodeforcoolage.netlify.app/" target='blank'>Find Your Collage Code</a></div>
                    </form>
                   
                </div>
            </div>     
        </>
    )   
}

export default Home

