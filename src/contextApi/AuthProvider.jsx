/**
 * The above code defines an AuthProvider component in React that allows creating a user with email and
 * password using Firebase authentication.
 * @returns The `AuthProvider` component is being returned, which wraps the `children` components with
 * the `AuthContext.Provider` component. The `authInfo` object containing the `createUser` function is
 * provided as the value to the `AuthContext.Provider`. This allows components consuming the
 * `AuthContext` to access the `createUser` function for creating a user with email and password using
 * Firebase authentication.
 */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

 export const  AuthContext = createContext(null);




const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('current user', currentUser);
        })
        
        return ()=>unSubscribe()
    },[])

    
    const authInfo={
        createUser,
        signInUser,
        user,
        logOut,
        loading
    }

     
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;