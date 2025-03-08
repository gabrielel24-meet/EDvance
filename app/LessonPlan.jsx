import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Linking, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';

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

const LessonPlan = () => {

    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        const aiResponse = await getGeminiResponse(input);
        setResponse(aiResponse);
    };

  return (
    <View style={styles.container}>
        <Text style={styles.Name}>Ask me a Question:</Text>

        <View>
            <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Type your question...  "
                style={styles.TextInput}
            />
        </View>

        <Button title="Get Response" onPress={handleSubmit} style={styles.buttonText}/>

        <ScrollView >
            <Text>{response}</Text>
        </ScrollView>

        <StatusBar style="auto" />
    </View>
  )
}

export default LessonPlan

const styles = StyleSheet.create({
    container: {
        flex: 1,                // ✅ Takes full screen height
        justifyContent: "center", // ✅ Centers content vertically
        alignItems: "center",    // ✅ Centers content horizontally
        backgroundColor: "#7CFAD9",
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
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 7,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
        textAlign: "center", // ✅ Centers text inside input (optional)
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
    result: { marginTop: 20, alignItems: 'center' },
  
  })