import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


    const firebaseConfig = {
        apiKey: "AIzaSyBDjeNYEUSypZD1E6adFOhv3Ifr8JYuqAk",
        authDomain: "react-native-all-apps.firebaseapp.com",
        projectId: "react-native-all-apps",
        storageBucket: "react-native-all-apps.appspot.com",
        messagingSenderId: "316796935084",
        appId: "1:316796935084:web:bf5fa05a7b605510dbf809",
        measurementId: "G-1DFENY85D0"
      };
      


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
