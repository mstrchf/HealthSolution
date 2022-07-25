// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./Components/Login";
import DoctorScreen from "./Components/DoctorScreen";
import UserDetail from "./Components/UserDetail";
// import DoctorsScreen from "./Components/DoctorsScreen";

// import UserScreen from "./Components/DoctorScreen";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// stack navigator and screen
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Doctors" component={DoctorsScreen} /> */}
        <Stack.Screen name="Doctor" component={DoctorScreen} />
        <Stack.Screen name="user" component={UserDetail}/>
      </Stack.Navigator>

      {/* <Login />
      <Appoint /> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
