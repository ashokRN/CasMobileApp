import firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBosGKZ_63v-OnAfRbnTofYeEa-Yc84A-E",
    authDomain: "anywhere-5cd4f.firebaseapp.com",
    databaseURL: "https://anywhere-5cd4f.firebaseio.com",
    projectId: "anywhere-5cd4f",
    storageBucket: "anywhere-5cd4f.appspot.com",
    messagingSenderId: "1043738671142",
    appId: "1:1043738671142:web:41f3372b26f7acba960ee7",
    measurementId: "G-N67NGF06RZ",
  };

firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();



export {storage,firebase as default};