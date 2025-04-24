/**
 * The above code defines an AuthProvider component in React that allows creating a user with email and
 * password using Firebase authentication.
 * @returns The `AuthProvider` component is being returned, which wraps the `children` components with
 * the `AuthContext.Provider` component. The `authInfo` object containing the `createUser` function is
 * provided as the value to the `AuthContext.Provider`. This allows components consuming the
 * `AuthContext` to access the `createUser` function for creating a user with email and password using
 * Firebase authentication.
 */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";

 export const  AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo={
        createUser,
        signInUser
    }
     
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;