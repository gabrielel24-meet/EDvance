import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";


const RoleSelectionScreen = ({Navigation}) => {
  return (
    <ImageBackground source={require("../assets/images/BG3.png")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>I am a...</Text>

        <View style={styles.row}>
        <RoleButton label="Teacher" icon={teacherIcon} onPress={() => navigation.navigate("./Login.jsx")} />
        <RoleButton label="Principal" icon={principalIcon} />
        </View>

        <RoleButton label="Student" icon={studentIcon} />
      </View>
    </ImageBackground>
  );
};

// Reusable Role Button Component
const RoleButton = ({ label, icon }) => {
  return (
    <TouchableOpacity style={styles.roleButton}>
      <Svg width={80} height={80} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" fill="#C1B299" />
        {icon}
      </Svg>
      <Text style={styles.roleText}>{label}</Text>
    </TouchableOpacity>
  );
};

// SVG Icons
const teacherIcon = (
  <Path d="M30 40 L50 30 L70 40 M40 50 L40 70 M60 50 L60 70" stroke="white" strokeWidth="5" />
);

const principalIcon = (
  <Path d="M30 40 H70 M30 60 H70" stroke="white" strokeWidth="5" />
);

const studentIcon = (
  <Path d="M50 30 C40 30, 40 50, 50 50 C60 50, 60 30, 50 30 M30 70 L70 70" stroke="white" strokeWidth="5" />
);

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  roleButton: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  roleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default RoleSelectionScreen;
