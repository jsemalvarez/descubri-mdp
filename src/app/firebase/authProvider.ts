import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";


export const loginWithEmailPassword = async( email: string, password : string) => {

    const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );

    const { uid } = resp.user;

    console.log(resp.user)

    return {
        ok: true,
        uid
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}