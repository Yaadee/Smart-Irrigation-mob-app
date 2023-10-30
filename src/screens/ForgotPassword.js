import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        Alert.alert("Please enter your email.");
        return;
      }

      const response = await fetch("  forgot api here      ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.success) {
          alert("Password reset email sent!");
        } else {
          alert("Failed to send Password reset link!");
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while reseting password");
    }
  };

  const handleLoginNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user" size={24} color="green" />
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={handleForgotPassword}
        >
          <Text style={styles.loginButtonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLoginNavigation}
        >
          <Text style={styles.GobackButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  forgotButton: {
    backgroundColor: "#1ad766",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  GobackButtonText: {
    color: "#1ad766",
    fontSize: 18,
  },
});

export default ForgotScreen;
