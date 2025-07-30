import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "../firebase";



export const loginUser = (email: string, password: string) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User logged in:", user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error logging in:", errorMessage);
        });
}

    export const createUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save the new user to Firestores
        await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date().toISOString(),
        });

        console.log("User created and saved to Firestore:", user.email);
    } catch (error: any) {
        console.error("Error creating user:", error.message);
        throw error;
    }

}

export const logoutUser = () => {
    signOut(auth)
    .then(() => {
        console.log("User logged out...");
    })
}

export const getUserInfo = () => {
    const user = auth.currentUser;

    if (user) { // logic handling and to not get null errors
        return user;
    } else {
        return null;
    }
}


//HOMEWORK:
//5. BONUS: try and add the user data to the database (if applicable) after registration
//6. BONUS: add useContext for auth state management
//7. BONUS: fix the localstorage issue with we get in the terminal
