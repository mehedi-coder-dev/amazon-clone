import { auth } from "./firebase";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Authentication = () => {
  const [user, setUser] = useState(null);
  const usehistory = useHistory();

  useEffect(() => {
    const unsubscrib = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscrib;
  }, []);

  const signup = async (email, password, username) => {
    try {
      const snapshort = await auth.createUserWithEmailAndPassword(email, password);
      await snapshort.user.updateProfile({
        displayName: username,
      });

      usehistory.push({
        pathname: "/",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);

      usehistory.push({
        pathname: "/",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const signout = () => {
    auth.signOut();
  };

  return {
    signIn,
    signup,
    signout,
    user,
  };
};

export default Authentication;
