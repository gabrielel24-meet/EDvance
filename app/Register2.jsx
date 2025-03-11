import React, { useState , useEffect} from "react";
import { Link } from 'expo-router';
import { View, Alert ,Text, TextInput,Linking, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Install this package
import { account } from "./appwriteConfig";
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [schoolDistrict, setSchoolDistrict] = useState("");
  
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
      <View style={styles.signupBox}>
        {/* Logo */}
        <Text style={styles.logo}>
          <Text style={{ color: "#5A673E" }}>ED</Text>
          <Text style={{ color: "#D5C2A3" }}>v</Text>
          <Text style={{ color: "#F8E8D0" }}>ance</Text>
        </Text>

        {/* Email Input */}
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />

        {/* Password Input */}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Name Input */}
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />

        {/* School District Dropdown */}
        <Text style={styles.label}>School District:</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={schoolDistrict} onValueChange={(itemValue) => setSchoolDistrict(itemValue)}>
            <Picker.Item label="Search.." value="" />
            <Picker.Item label="Tel-Aviv" value="Tel-Aviv" />
            <Picker.Item label="Haifa" value="Haifa" />
            <Picker.Item label="Nazareth" value="Nazareth" />
          </Picker>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <Text style={styles.signinText}>Already have an account? <Link style={styles.signinLink} href={"./Login2"}>Sign in</Link></Text> 
        
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B2A1A", // Dark brown background
    justifyContent: "center",
    alignItems: "center",
  },
  signupBox: {
    backgroundColor: "#A29072", // Light brown
    padding: 10,
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
    fontSize: 15,
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
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFF",
    marginTop: 5,
  },
  signupButton: {
    backgroundColor: "#5A673E", // Dark green
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  signupText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  signinText: {
    marginTop: 15,
    color: "white",
    fontSize: 14,
  },
  signinLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
