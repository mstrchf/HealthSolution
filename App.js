// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./Components/Login";
import Verification from "./Components/Verification";
import DoctorScreen from "./Components/DoctorScreen";
import UserDetail from "./Components/UserDetail";
import DoctorProfile from "./Components/DoctorProfile";
import Adminisrator from "./Components/Administrator";
import EntryScreen from "./Components/EntryScreen";
import DoctorsPortal from "./Components/DoctorsPortal";


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
        {/* <Stack.Screen name="Doctor" component={DoctorScreen} /> */}
        <Stack.Screen name="Doctor" component={DoctorScreen} />
        <Stack.Screen name="user" component={UserDetail}/>
        <Stack.Screen name="Doctors" component={DoctorProfile}/>
        <Stack.Screen name="admin" component={Adminisrator}/>
        <Stack.Screen name="entry" component={EntryScreen}/>
        <Stack.Screen name="doctorsportal" component={DoctorsPortal}/>
      </Stack.Navigator>

     
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
