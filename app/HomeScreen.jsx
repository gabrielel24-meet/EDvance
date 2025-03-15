import React from "react";
import { View,Button,Alert, Text, TouchableOpacity,Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { logoutUser } from "./appwriteConfig";
import axios from 'axios';


const HomeScreen = () => {

    const handleLogout = async () => {
      await logoutUser();
      navigation.replace("Login"); // Redirect to login after logout
    };

      
  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image
        source={require("../assets/images/Logo.png")} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Green Bar with Icons
      <View style={styles.iconBar}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.iconPlaceholder} />
        ))}
      </View> */}

      {/* Join a Room Card */}
      <TouchableOpacity style={styles.joinCard}>
        <Text style={styles.plusIcon}>+ </Text>
        <Text style={styles.joinText}>Join a room</Text>
      </TouchableOpacity>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
      
      <View style={styles.logout}>
        <Button title="Logout" onPress={handleLogout} />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <FontAwesome name="bars" size={24} color="white" />
        <FontAwesome name="home" size={28} color="white" />
        <View style={styles.circle} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4ab95", 
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 250,
    height: 120,
    position: "absolute",
    top: 1, // Move logo to the top
    alignSelf: "center",
  },
  iconBar: {
    flexDirection: "row",
    backgroundColor: "#5A673E", // Dark green bar
    width: "100%",
    height: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logout:{
    marginTop: 350,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
  },
  joinCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    width: "85%",
    borderRadius: 10,
    marginTop: 80,
  },
  plusIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7B3333",
  },
  joinText: {
    fontSize: 18,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fabIcon: {
    fontSize: 28,
    color: "#7B3333",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#5A673E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
