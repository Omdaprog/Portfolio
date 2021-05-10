import firebase from 'firebase'
import 'firebase/storage'

var firebaseconfig= {
    apiKey: "AIzaSyDlgdiAL5ZRqLd511GDdEKuAxsWn0ONya4",
    authDomain: "portfolio-f67c1.firebaseapp.com",
    projectId: "portfolio-f67c1",
    storageBucket: "portfolio-f67c1.appspot.com",
    messagingSenderId: "121938444769",
    appId: "1:121938444769:web:397648410801ae6a5c52a0",
    measurementId: "G-K8WRMDC09W"
};
const db = firebase.initializeApp(firebaseconfig).firestore()
export{db};  