import React from "react";
import { useState ,useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { SvgUri } from "react-native-svg"; // Assuming you have installed the necessary package

const DashboardScreen = ({ navigation }) => {
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [moisture, setMoisture] = useState("");
  const [humidityLabel,setHumidityLabel]=useState("");
  const [temperatureLabel,setTemperatureLabel]=useState("");
  const [moistureLabel,setMoistureLabel]=useState("");
  
 
  

  const lastIrrigationTime = "10:30 AM";
  const nextIrrigationTime = "02:00 PM";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.66.42:4300/api/sensors/data/txt-tdt");

      if (response.ok) {
        const data = await response.json();

        
        setHumidityLabel(data.sensorReadings[0].sensor.sensing_type)
        setHumidity(data.sensorReadings[0].reading+"%");
        setTemperatureLabel(data.sensorReadings[1].sensor.sensing_type)
        setTemperature(data.sensorReadings[1].reading +" °C");
        setMoistureLabel(data.sensorReadings[2].sensor.sensing_type)
        setMoisture(data.sensorReadings[2].reading+"%");
      } else {
        throw new Error("Connection Error");
      }
    } catch (error) {
      Alert.alert("Error", "API not connected",[{text:"OK"}]);
    }
  };

  onPressMenu = () => {
    navigation.navigate('Login','Create')
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={onPressMenu}>
          <FontAwesome name="bars" size={24} color="green" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.circle1}>
          {/* <SvgUri uri="humidity.svg" width={48} height={48} /> */}
          <Text style={styles.label}>Last </Text>
          <View style={styles.bar} />
          <Text style={styles.value}>{lastIrrigationTime}</Text>
        </View>

        <View style={styles.circle2}>
          {/* <SvgUri uri="temperature.svg" width={48} height={48} /> */}
          <Text style={styles.label}>Mode</Text>
          <View style={styles.bar} />

          <Text style={styles.value}>{"auto"}</Text>
        </View>

        <View style={styles.circle1}>
          {/* <SvgUri uri="moisture.svg" width={48} height={48} /> */}
          <Text style={styles.label}>next </Text>
          <View style={styles.bar} />
          <Text style={styles.value}>{nextIrrigationTime}</Text>
        </View>
      </View>
      <View style={styles.line} />

      <View style={styles.measurementsContainer}>
        <View style={styles.measurement}>
          {/* <SvgUri uri="humidity.svg" width={48} height={48} /> */}
          <Text style={styles.measurementLabel}>{humidityLabel}</Text>
          <Text style={styles.measurementValue}>{humidity}</Text>
        </View>

        <View style={styles.measurement}>
          {/* <SvgUri uri="temperature.svg" width={48} height={48} /> */}
          <Text style={styles.measurementLabel}>{temperatureLabel}</Text>
          <Text style={styles.measurementValue}>{temperature}</Text>
        </View>

        <View style={styles.measurement}>
          {/* <SvgUri uri="moisture.svg" width={48} height={48} /> */}
          <Text style={styles.measurementLabel}>{moistureLabel}</Text>
          <Text style={styles.measurementValue}>{moisture}</Text>
        </View>
        <View style={styles.measurement}>
          {/* <SvgUri uri="humidity.svg" width={48} height={48} /> */}
          <Text style={styles.measurementLabel}>Status</Text>
          <Text style={styles.measurementValue}>Medium</Text>
        </View>

        <View style={styles.measurement}>
          {/* <SvgUri uri="temperature.svg" width={48} height={48} /> */}
          <Text style={styles.measurementLabel}>Mode</Text>
          <Text style={styles.measurementValue}>Auto</Text>
        </View>

        <View style={styles.measurement}>
          {/* <SvgUri uri="moisture.svg" width={48} height={48} /> */}
          <Text style={styles.measurementLabel}>Schedule</Text>
          <Text style={styles.measurementValue}>{nextIrrigationTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 16,
    backgroundColor: "#1ad766",
    height: 150,
    color: "#fff",
  },
  menuButton: {
    padding: 8,
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
  },
  measurementsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  measurement: {
    backgroundColor: "#1ad766",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    width: "40%",
    margin: 8,
  },
  measurementLabel: {
    textTransform:"capitalize",
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },
  measurementValue: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "light",
    marginTop: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
  },
  value: {
    fontSize: 10,
    fontWeight: "light",
    marginTop: 8,
  },
  info: {
    flex: 1,
   
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: 50,
  },
  circle1: {
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#1ad766",
    padding: 16,
    alignItems: "center",
    width: 100,
    height:100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 30,
  },
  circle2: {
    backgroundColor: "#fff",
    borderRadius: 55,
    borderWidth: 2,
    borderColor: "#1ad766",
    padding: 16,
    alignItems: "center",
    width: 110,
    height:110,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 4,
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
    width: "90%",
    marginLeft:17,
    marginRight:5,
   
    backgroundColor: "#1ad766",
  },
});

export default DashboardScreen;





//// Helllo maaan