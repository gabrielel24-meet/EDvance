import React, { useState, useEffect } from "react";
import { Link } from 'expo-router';
import { View, Linking , navigation, Alert, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { account, getSession } from "./appwriteConfig";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Check if user is already logged in
    useEffect(() => {
      const checkUserSession = async () => {
        const user = await getSession();
        if (user) {
          navigation.replace("/PreRegister"); // Redirect to home if logged in
        }
      };
      checkUserSession();
    }, []);
  
    //Handle user login
    const handleLogin = async () => {
      try {
        await account.createEmailPasswordSession(email, password);
        Alert.alert("Success", "Logged in successfully!");
        navigation.replace("/PreRegister"); // Redirect after login
      } catch (error) {
        Alert.alert("Error", error.message);
        console.error("Login Error:", error);
      }
    };
  

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        {/* Logo */}
        <Text style={styles.logo}>
          <Text style={{ color: "#5A673E" }}>ED</Text>
          <Text style={{ color: "#D5C2A3" }}>v</Text>
          <Text style={{ color: "#F8E8D0" }}>ance</Text>
        </Text>

        {/* Email Input */}
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email..."
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Input */}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>Don't have an account? <Link style={styles.signupLink} href={"./Register2"}>Sign up</Link></Text> 
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B2A1A", // Dark brown background
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    backgroundColor: "#A29072", // Light brown
    padding: 25,
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#5A673E", // Dark green
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 15,
    color: "white",
    fontSize: 14,
  },
  signupLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
