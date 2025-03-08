import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Linking, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
// import { Client, Account, ID } from 'react-native-appwrite';
import axios from 'axios';


////I used ChatGPT for the weather API. I did try to understand what it does. I think I understood thr most of it

// const API_KEY = "baa92cfee914a9267cbc258491aeafb4"; // API key
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// export const getWeather = async (city) => { //Reusable component that gets the liked city, and returns data about the city weather
//     const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//     return response.data; 
// }

//API
const API_KEY = "AIzaSyAOxcvlHmBa-sh8LloEBJnYlO8-YxQBRJs";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export const getGeminiResponse = async (prompt) => {
  try {
    const response = await axios.post(API_URL, {
      contents: [{ parts: [{ text: prompt }] }]
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error fetching Gemini API response:", error);
    return "Error fetching response";
  }
};

// //DataBase
// const client = new Client()
//     .setProject('67b2217a00250075826a')
//     .setPlatform('com.meet.app');

//Main App function
export default function App() {

  // //Login useState + useEffect
  // const [name, setName] = useState(''); 
  // const [displayName, setDisplayName] = useState('');

  // const HandleName = () => { 
  //   setDisplayName(name)
  // }

const [input, setInput] = useState("");
const [response, setResponse] = useState("");

const handleSubmit = async () => {
  const aiResponse = await getGeminiResponse(input);
  setResponse(aiResponse);
};



  return (
    <View style={styles.container}>

      <Text style={styles.Hello}>Hello!</Text>
      <Text style={styles.buttonText}>Welcommmmme to your second school!</Text>


      <View>
        <Text style={styles.Name}>Ask me a Question:</Text>

        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your question...  "
          style={styles.TextInput}
        />
        <Button title="Get Response" onPress={handleSubmit} style={styles.buttonText}/>
        <ScrollView >
          <Text>{response}</Text>
        </ScrollView>
      </View>

      <Link href={"/Register"}>Sign in</Link>
      
      {/* <View style={styles.InputMargin}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        /> */}
        
        {/* <TouchableOpacity style={styles.Link} onPress={HandleName}><Text style={styles.ButtonText}>Submit</Text></TouchableOpacity> It goes to the function HandleName() that sets "displayName" to be "name" */}

        {/* <Text style={styles.Name}>Hello {displayName}!</Text> */}
      {/* </View> */}
      
      {/* Weather */}
      {/* <View style={styles.container}>
      <Text style={styles.header}>Weather</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={fetchWeather} />
      {weather && (
        <View style={styles.result}>
          <Text>Temperature: {weather.main.temp}°C</Text>
          <Text>Weather: {weather.weather[0].description}</Text>
        </View>
      )} */}
      
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

