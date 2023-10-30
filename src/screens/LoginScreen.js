import React, { useState,} from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";




const LoginScreen = ({ navigation }) => {
  const [serial_number, setSerialNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!serial_number || !password) {
        alert("Please enter both serial number and password.");
        return;
      }

      const response = await fetch(
        "https://smartirrigate-backend-api.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ serial_number, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:");
        navigation.navigate("Dashboard");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed", error.message);
    }

    setSerialNumber("");
    setPassword("");
  };
 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user" size={24} color="green" />
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Serial Number"
          value={serial_number}
          autoCompleteType="off"
          onChangeText={(text) => setSerialNumber(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.otherContainer}>
          <TouchableOpacity style={styles.signupContainer}>

            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              <Text style={styles.registerButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Reset Account")}>
              <Text style={styles.forgotButtonText}>Forgot Password?</Text>
              </TouchableOpacity>
              </TouchableOpacity>
        
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#1ad766",
    height: 150,
    color: "#fff",
  },
  headerText: {
    fontSize: 18,
    marginLeft: 8,
    color: "#fff",
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  input: {
    height: 55,
    borderColor: "#d2d2d2",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: "#1ad766",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  navigationText:{
   
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,

  },

  otherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginVertical: 12,
    marginTop: 16,
  },
  registerButtonText: {
    color: "#1ad766",
    fontSize: 13,
  },
  forgotContainer: {
    width: "40%",
    height: 50,
    marginRight: 0,
  },
  forgotButtonText: {
    color: "#1ad766",
    fontSize: 13,
  },
});

export default LoginScreen; 
