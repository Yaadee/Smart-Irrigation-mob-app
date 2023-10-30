import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import ForgotScreen from "../screens/ForgotPassword";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
       
      <Stack.Screen
        name="Sidebar"
        component={LoginScreen}
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "Dashboard",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Create"
        component={RegistrationScreen}
        options={{
          title: "Create",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reset Account"
        component={ForgotScreen}
        options={{
          title: "Reset Account",
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000", // Customize the header background color
  },
  headerTitle: {
    color: "#fff", // Customize the header title color
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});

export default AppNavigator;
