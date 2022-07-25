// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./Components/Login";
import DoctorsScreen from "./Components/DoctorsScreen";
import UserScreen from "./Components/UserScreen";
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
        <Stack.Screen name="Doctors" component={DoctorsScreen} />
        <Stack.Screen name="user" component={UserScreen} />
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
