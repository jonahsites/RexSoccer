import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, loginWithGoogle, loginWithEmail as firebaseLoginWithEmail, logout as firebaseLogout } from '../firebase';

interface FirebaseContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  login: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextType>({ 
  user: null, 
  loading: true, 
  isAdmin: false,
  login: async () => {},
  loginWithEmail: async () => {},
  logout: async () => {}
});

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        try {
          const userDoc = await getDoc(userRef);
          const isBootstrappedAdmin = currentUser.email === "jadovdav@gmail.com";
          
          if (!userDoc.exists()) {
            await setDoc(userRef, {
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              role: isBootstrappedAdmin ? 'admin' : 'client',
              lastLogin: serverTimestamp()
            });
            setIsAdmin(isBootstrappedAdmin);
          } else {
            const userData = userDoc.data();
            // If they are the bootstrapped admin, ensure they have the admin role in the state
            // even if it's not in the doc (rules will allow them to act as admin anyway)
            setIsAdmin(userData.role === 'admin' || isBootstrappedAdmin);
            await setDoc(userRef, { 
              lastLogin: serverTimestamp(),
              // Ensure bootstrapped admin actually stays admin in the doc too
              ...(isBootstrappedAdmin && userData.role !== 'admin' ? { role: 'admin' } : {})
            }, { merge: true });
          }
        } catch (error) {
          console.error("Error syncing user profile:", error);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    try {
      await firebaseLoginWithEmail(email, pass);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await firebaseLogout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ user, loading, isAdmin, login, loginWithEmail, logout }}>
      {children}
    </FirebaseContext.Provider>
  );
};
