import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Linking, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { logoutUser } from "./appwriteConfig";


////I used ChatGPT for the weather API. I did try to understand what it does. I think I understood thr most of it

// const API_KEY = "baa92cfee914a9267cbc258491aeafb4"; // API key
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// export const getWeather = async (city) => { //Reusable component that gets the liked city, and returns data about the city weather
//     const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//     return response.data; 
// }



//Main App function
export default function App({navigation}) {

const handleLogout = async () => {
  await logoutUser();
  navigation.replace("Login"); // Redirect to login after logout
};

  return (
    <View style={styles.container}>

      <Text style={styles.Hello}>Hello!</Text>
      <Text style={styles.buttonText}>Welcommmmme to your second school!</Text>

      <View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      
      <Link href={"/Register"}>Sign in</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the top
    backgroundColor: "#7CFAD9" , //'#fbe0e0'
  },

  ButtonText:{
    color: "white"
  },

  Hello:{
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop:20,
  },

  Name: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop:20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop:5,
  },

  TextInput: {
    height: 50,
    width: 300,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 7,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },

  InputMargin:{
    marginTop: 10,
    textAlign: "center",
  },

  Link:{
    height: 40,
    width: 80,
    marginTop: 20,
    paddingTop: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 7,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    color: 'white',
    fontSize:15
  },

  header: { fontSize: 24, fontWeight: 'bold' , marginTop:20},
  input: { borderWidth: 1, width: 200, padding: 8, margin: 10 , backgroundColor:"white"},
  result: { marginTop: 20, alignItems: 'center' },

  // image: {
  //   width: 400, // Adjust the width
  //   height: 200, // Adjust the height
  // },
})

