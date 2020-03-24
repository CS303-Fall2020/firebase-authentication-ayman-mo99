import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import * as firebase from "firebase";

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});


var firebaseConfig = {
  apiKey: "AIzaSyCZCAOol0b29XvRSKFlns6SFSVeHAEonm4",
  authDomain: "todo-d4372.firebaseapp.com",
  databaseURL: "https://todo-d4372.firebaseio.com",
  projectId: "todo-d4372",
  storageBucket: "todo-d4372.appspot.com",
  messagingSenderId: "902648881580",
  appId: "1:902648881580:web:b9d462b6a7d0e835725a09",
  measurementId: "G-3LNV1V5E5E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*firebase.analytics();*/


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  
    


  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}