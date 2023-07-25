import Container from "react-bootstrap/Container"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button  from "react-bootstrap/Button";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Admin() {
    const navigate = useNavigate();

    const [pic, setpic] = useState([]);
    const [day, setday] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')
            }
        });
        }, [auth])
    const postRef = collection(db, "posts")
    
    const sendFunction = async (e) => {

        await addDoc(postRef, {
            link: pic,
            day: day,
        }).then(
            toast.success("Saved Successfully")
        )

        setday("");
        setpic("");
    }

    const logout = () => {
        signOut(auth).then(() => {
            toast.success("Logged Out Successfully");
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div>
            <Container>
                <Button onClick={logout}>Log Out</Button>
                <h1>Post Form : </h1>
                <form onSubmit={sendFunction}>
                    <label><b>Post Link: </b></label>
                    &nbsp; &nbsp;
                    <input type="text" name="pic" id="pic" onChange={(e) => { setpic(e.target.value) }} placeholder='paste link here' />
                    <br />
                    <label htmlFor=""><b>Is 1-Day Sale ? : </b></label>
                    <select name="cat" id="cat" onChange={(e) => { setday(e.target.value) }} >
                        <option value={null}>Select Category</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <br />
                    <input type="submit" value="Submit" className='bold' />
                </form>
            </Container>
        </div>
    )
}

export default Admin