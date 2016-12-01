
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyC8OPPxFsKXhCEzCW9vct9-iIK5F-b0d2c",
    authDomain: "final-project-recording-d25b3.firebaseapp.com",
    databaseURL: "https://final-project-recording-d25b3.firebaseio.com",
    storageBucket: "final-project-recording-d25b3.appspot.com",
    messagingSenderId: "911099048176"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};