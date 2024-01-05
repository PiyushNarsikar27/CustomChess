"use client"

import { useEffect, useState } from "react"

export default function EmailVerificationComponent({ params }: { params: { verifyParams:string[] } }) {
    const [verificationStatusMsg, setVerificationStatusMsg] = useState("");
    const username = params.verifyParams[0];
    const token = params.verifyParams[1];
    useEffect(()=>{if (username && token) {
        fetch(`http://localhost:8000/email/verify/user/${username}/${token}`)
          .then((response) => {
            if (response.ok) {
              setVerificationStatusMsg('Email verification successful!');
            } else {
              setVerificationStatusMsg('Email verification failed. Please try again');
            }
          })
          .catch((error) => {
            setVerificationStatusMsg('Email verification failed. Please try again');
            console.error('Error during email verification:', error);
          });
      }
    }, [params.verifyParams])
    return (
      <p>{verificationStatusMsg}</p>
    )
  }