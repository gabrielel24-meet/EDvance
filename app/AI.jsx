import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
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

const AIChatScreen = () => {

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  
  const handleSubmit = async () => {
    const aiResponse = await getGeminiResponse(input);
    setResponse(aiResponse);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/images/Logo.png")} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Ask EDvance AI</Text>

      {/* Input Box */}
      <TextInput
        style={styles.input}
        placeholder="Type your question here..."
        placeholderTextColor="#5A673E"
        value={input}
        onChangeText={setInput}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ask</Text>
      </TouchableOpacity>

      {/* Response Box */}
      <ScrollView style={styles.responseBox}>
        <Text style={styles.responseText}>{response || "AI's response will appear here..."}</Text>
      </ScrollView>
    </View>
  );
};

export default AIChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4ab95",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#EDE3D9",
    marginBottom: 15,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#EDE3D9",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#EDE3D9",
    backgroundColor: "#8B8570",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#8B8570",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EDE3D9",
  },
  responseBox: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#EDE3D9",
    padding: 15,
    borderRadius: 10,
    minHeight: 100,
  },
  responseText: {
    fontSize: 16,
    color: "#5A673E",
  },
});
