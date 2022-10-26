import {
  AuthProvider,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase.config";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createAccount: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signInWithProvider: (provider: AuthProvider) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  updateUser: (name: string, profilePic: string, user: User) => Promise<void>;
}

export const AuthContext = createContext<null | AuthContextProps>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (
        currentUser === null ||
        currentUser.emailVerified ||
        currentUser.providerData[0].providerId === "github.com"
      ) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const createAccount = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name: string, profilePic: string, user: User) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: profilePic,
    });
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithProvider = (provider: AuthProvider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createAccount,
        signIn,
        signInWithProvider,
        logOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
