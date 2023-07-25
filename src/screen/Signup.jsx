import React, { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { auth, fdb } from "../firebase";
  import {
    collection,
    addDoc,
  } from "firebase/firestore";
import Navbar from '../components/Navbar';
import "../styles/Login.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const saveToDB = () => {

    }

    useEffect(() => {
      
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')
            }
        });
    }, [auth])
    

 

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password).then(
                toast.success("Account has been created successfully !")
            )
            console.log(user)
        } catch (error) {
            window.alert(error.message)
        }
    }
    
  return (
    <>
    <Navbar />

    <div className="loginboxContainer">
        <div className="loginbox">
            <form action="" className="loginForm" onSubmit={signUp}>
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
                    <button type='submit' className='submitBtn'>Sign up</button>
                </span>
                </div>
                <div className="_link"><a href="/login">Already have an account?</a></div>
            </form>
        </div>
    </div>

    <marquee className="mrk">
             <span className="_mrk">
                <b>&nbsp;  CoolAge n Thrill &nbsp; | &nbsp; <b>CoolAge Presents <i>ChatX : </i></b> Pseudonomous Intra-Campus Chatbox &nbsp; | &nbsp; <b><i>Vibin'</i></b> &nbsp; </b>
             </span>
            </marquee>
            {/* <hr /> */}
    {/* <button onClick={logout}>LogOut</button> */}
</>
  )
}

export default Signup