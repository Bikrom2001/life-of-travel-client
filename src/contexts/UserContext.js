import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

    // Create a Users
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login User
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // google login
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub login
    const signInWithGithHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // update user 
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }   


    useEffect( () => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe(); 
        }
    },[])


    const authInfo = {loading, user, createUser, signIn, logOut, updateUserProfile, signInWithGoogle, signInWithGithHub};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;