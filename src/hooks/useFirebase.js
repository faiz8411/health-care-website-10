import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../components/Home/Firebase/firebase.init"


initializeAuthentication()


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)


    }
    console.log(user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    }, [])

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleUserLogin,
        handleUserRegister,

    }

}
export default useFirebase