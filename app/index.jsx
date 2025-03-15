import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Linking, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AIChatScreen from "./AI";
import HomeScreen from "./HomeScreen";


//Menu
const Drawer = createDrawerNavigator();


//Main App function
export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <Image
        source={require("../assets/images/Logo.png")} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.h1}>Hello</Text>
      <Text style={styles.h2}>Welcome to EDvance</Text>

      {/* Description */}
      <Text style={styles.description}>
        Here you'll be able to maximize your school experience, whether you are a{" "}
        <Text style={styles.bold}>teacher</Text>, <Text style={styles.bold}>principal</Text>, or a{" "}
        <Text style={styles.bold}>student</Text>.
      </Text>

      {/* "Let's Start!" Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("PreRegister")}
      >
        <Text style={styles.buttonText}>Let's Start!</Text>
      </TouchableOpacity>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4ab95",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60, 
  },  
  logo: {
    width: 250,
    height: 140,
    position: "absolute",
    top: 1, 
    alignSelf: "center",
  },
  
  h1: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 120,
  },
  h2: {
    fontSize: 30,
    color: "#D5C2A3",
    marginTop: 5,
    fontWeight: "600",
  },
  description: {
    fontSize: 18,
    color: "#F8E8D0",
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  bold: {
    fontWeight: "bold",
    color: "#E5D2A0",
  },
  startButton: {
    marginTop: 30,
    backgroundColor: "#A29072",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


