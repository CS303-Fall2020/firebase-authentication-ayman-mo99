import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput,Button,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import * as firebase from "firebase";

export default function todo({ navigation }) {
 
  async function logout() {
    
    try {

      await firebase.auth().signOut();

      navigation.navigate('Home')
      // Navigate to login view

  } catch (error) {
      console.log(error);
  }
  
  }

  return (
    <View style={globalStyles.modalContainer}>
      <View style={{paddingTop:10}} />
      <Text> Todo </Text>
      <View style={{paddingTop:10}} />
     <Text> hi   {navigation.getParam('mail')} </Text>
     <View style={{paddingTop:40}} />
     <Button  title={"log out"}   onPress={logout} />
    </View>
  );
}