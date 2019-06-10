import * as firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyALMHXtB9Xb3Wrz-nRap82rDN0Mw-JbL1E",
    authDomain: "commapp-95caf.firebaseapp.com",
    databaseURL: "https://commapp-95caf.firebaseio.com",
    projectId: "commapp-95caf",
    storageBucket: "commapp-95caf.appspot.com",
    messagingSenderId: "912226145891",
    appId: "1:912226145891:web:9f1e3b71e202dc24"
};

firebase.initializeApp(config);
const storage = firebase.storage();

export {
    storage, firebase as default
}