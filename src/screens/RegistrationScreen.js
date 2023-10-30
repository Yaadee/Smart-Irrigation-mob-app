import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [serial_number, setSerial_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setlocation] = useState("");

  const handleSignUp = async () => {
    // Validate form inputs
    if (
      !firstName ||
      !lastName ||
      !phone_number ||
      !serial_number ||
      !email ||
      !password ||
      !location
    ) {
      Alert.alert("Error", "Please enter all fields");
      return;
    }

    try {
      // Send sign-up request to the API
      const response = await fetch(
        "http://192.168.66.42:4300/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone_number,
            serial_number,
            email,
            password,
            location
          }),
        }
      );

      if (response.ok) {
        // Registration success
        const data = await response.json();
        console.log("Registration success:", data,response);
        Alert.alert("Success", "Registered Successfully!");
        navigation.navigate("Login");
      } else {
        // Registration error
        const errorText = await response.text();
        throw new Error(errorText || "Registration failed");
      }
    } catch (error) {
      // Registration error
      console.error("Registration error:", error);
      Alert.alert("Error", "Registration failed: " + error.message);
    }

    // Resetting the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone_number("");
    setSerial_number("");
    setlocation("");
    setPassword("");
    setlocation("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <View style={styles.formContainer}>
        {/* Input fields */}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCompleteType="off"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCompleteType="off"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhone_number(text)}
          autoCompleteType="off"
          value={phone_number}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Serial Number"
          onChangeText={(text) => setSerial_number(text)}
          value={serial_number}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCompleteType="email"
        />

        <TextInput
          style={styles.input}
          placeholder="Location"
          onChangeText={(text) => setlocation(text)}
          value={location}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          autoCompleteType="password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherContainer}>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#1ad766",
    height: 150,
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
  buttonContainer: {
    width: "100%",
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: "#1ad766",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  loginButtonContainer: {
    alignItems: "center",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#1ad766",
    fontSize: 15,
    marginTop:-28
  },
  otherContainer: {
    marginTop: 12,
  },
});

export default RegistrationScreen;
