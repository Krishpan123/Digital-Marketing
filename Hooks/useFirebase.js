import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app)

const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {

        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                setUser(user);  
                console.log(user)

            })
            .catch(error => {
                console.log("Error", error);
            })
    }
    const handleSIgnOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return { user, signInWithGoogle,handleSIgnOut };
};

export default useFirebase;