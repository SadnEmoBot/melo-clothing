import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCagM_di6vucnEj8AmUX-kydCxL_-ozllU",
    authDomain: "melo-clothing-db.firebaseapp.com",
    projectId: "melo-clothing-db",
    storageBucket: "melo-clothing-db.appspot.com",
    messagingSenderId: "189364735291",
    appId: "1:189364735291:web:32307334371cbf2b73bb1e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

// 之所以需要传递第二个参数additionalInformation
// 是因为传过来的userAuh是signUp-form ->
// const { user } = await createAuthUserWithEmailAndPassword(email, password); 的 user (该API的返回值或者任何其他方式登录的返回值大致都长一样)
// 返回值里的displayName为null 因为google并没返回表单输入的displayName
// 所以 需要将表单存储的displayName传到createUserDocumentFromAuth() 然后解构
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // if the user data does not exists
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user...", error);
        }
    }

    // if the user data exists
    // return userDocRef;
    return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};
