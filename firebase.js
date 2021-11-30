// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore/lite';

const init = () => {
    const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,
    };

// const analytics = getAnalytics(app);
    return initializeApp(firebaseConfig);
};

export const firestore = () => {
    const app = init();
    return getFirestore(app);
};
