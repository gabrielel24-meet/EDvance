import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { account, getSession } from "./appwriteConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Check if user is already logged in
  useEffect(() => {
    const checkUserSession = async () => {
      const user = await getSession();
      if (user) {
        navigation.replace("HomeScreen"); // Redirect to home if logged in
      }
    };
    checkUserSession();
  }, []);

  //Handle user login
  const handleLogin = async () => {
    try {
      await account.createEmailPasswordSession(email, password);
      Alert.alert("Success", "Logged in successfully!");
      navigation.replace("HomeScreen"); // Redirect after login
    } catch (error) {
      Alert.alert("Error", error.message);
      console.error("Login Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default LoginScreen;
