import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

function Home() {
  const [data, setdata] = useState([])

  const postRef = collection(db, "posts")

  useEffect(() => {
    const queryMessages = query(postRef);
    onSnapshot(queryMessages, (snapshot) => {
      let posts = [];
      snapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setdata(posts);
    })
  }, [])

  return (
    <div>
      <div className='headX'>One Day Offers : </div>
      {
        data.map((d) => {
          return (
            <>

              {
                d.day === "yes" ?
                  (
                    <>
                      <img src={d.link} alt="ads" />
                    </>
                  )
                  :
                  (
                    <></>
                  )
              }

              {/* <img src={d.link} alt="" /> */}
            </>
          )
        })
      }

<div className='headX'>Special Offers : </div>
      {
        data.map((d) => {
          return (
            <>

              {
                d.day === "yes" ?
                  (
                    <>

                    </>
                  )
                  :
                  (
                    <>
                      <img src={d.link} alt="ads" />
                    </>
                  )
              }

              {/* <img src={d.link} alt="" /> */}
            </>
          )
        })
      }
    </div>
  )
}

export default Home