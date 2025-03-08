import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Linking, Image, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react';
import { account } from "./appwriteConfig";
import axios from 'axios';


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  //Function to handle user registration
  const handleRegister = async () => {
    try {
      const response = await account.create("unique()", email, password, name);
      Alert.alert("Success", "Account Created Successfully!");
      console.log("User Registered:", response);
    } catch (error) {
      Alert.alert("Error", error.message);
      console.error("Registration Error:", error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

      <Button title="Register" onPress={handleRegister} />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#7CFAD9" , 
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#FFFFFF"
      },
      input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#FFFFFF"
      },
})