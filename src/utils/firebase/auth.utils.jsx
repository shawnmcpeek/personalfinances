import { auth } from "./firebase.util";
import {
  CreateUserWithEmailAndPassword,
  GoogleAuthProvider,
  SignInWithEmailAndPassword,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return CreateUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return SignInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await auth.signInWithPopup(auth, provider);
  //result.user
  return result
};

export const doSignOut = () => {
  return auth.signOut();
};
