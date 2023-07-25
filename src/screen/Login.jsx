import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate('/');
        }
    });

    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            window.alert(error.message)
        }
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log(auth)
        }).catch((error) => {
            window.alert(error.message)
        });
    }
    return (
        <>
            <Navbar />

            <div className="loginboxContainer">
                <div className="loginbox">
                    <form action="" className="loginForm" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="">Email : </label>
                            <input type="email" name="email" id="email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password : </label>
                            <input type="password" name="password" id="password" onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className="btn">
                            <span className="submit">
                                <button type='submit' className='submitBtn'>Log in</button>
                            </span>
                        </div>
                        <div className="_link"> <a href="/signup"><b>Create An Account</b></a></div>
                    </form>
                </div>
            </div>

            <marquee className="mrk">
             <span className="_mrk">
                <b>&nbsp;  CoolAge n Thrill &nbsp; | &nbsp; <b>CoolAge Presents <i>ChatX : </i></b> Pseudonomous Intra-Campus Chatbox &nbsp; | &nbsp; <b><i>Vibin'</i></b> &nbsp; </b>
             </span>
            </marquee>
            {/* <button onClick={logout}>LogOut</button> */}
        </>
    )
}

export default Login