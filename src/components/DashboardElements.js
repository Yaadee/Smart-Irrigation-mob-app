import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashboardElements = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>Last Time</Text>
        <View style={styles.bar} />
        <Text style={styles.time}>9:30 AM</Text>
      </View>

      <View style={[styles.circle, styles.wideCircle]}>
        <Text style={styles.circleText}>Auto</Text>
        <View style={styles.bar} />
        <Text style={styles.mode}>Mode</Text>
      </View>

      <View style={styles.circle}>
        <Text style={styles.circleText}>Next Time</Text>
        <View style={styles.bar} />
        <Text style={styles.time}>2:00 PM</Text>
      </View>

      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 120,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  wideCircle: {
    width: 150,
  },
  circleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginBottom: 8,
  },
  bar: {
    height: 2,
    width: 60,
    backgroundColor: "green",
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  mode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 8,
  },
  line: {
    height: 2,
    backgroundColor: "gray",
    marginTop: 16,
  },
});

export default DashboardElements;
