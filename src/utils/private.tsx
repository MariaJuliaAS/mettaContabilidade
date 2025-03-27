import { ReactNode } from "react";
import { auth, db } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode
}

export function Private({ children }: PrivateProps) {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                setDoc(doc(db, "user", "userProps"), userData)
                setLoading(false)
                setSigned(true)

            } else {
                setLoading(false)
                setSigned(false)
            }
        })

        return () => {
            unsub();
        }

    }, [])

    if (loading) {
        return (
            <></>
        )
    }

    if (!signed) {
        console.log("teste")
        return <Navigate to="/addNewsAuth" />
    }

    return children;

}