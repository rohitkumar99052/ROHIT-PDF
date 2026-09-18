import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const googleProvider = new GoogleAuthProvider();

export { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  doc, 
  setDoc, 
  getDoc, 
  getDocs,
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot,
  serverTimestamp,
  updateDoc,
  where
};
export type { User };
