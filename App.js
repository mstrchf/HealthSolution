// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./Components/Login";
import Verification from './Components/Verification';
import DoctorScreen from "./Components/DoctorScreen";
import UserDetail from "./Components/UserDetail";
import DoctorProfile from "./Components/DoctorProfile";
import Adminisrator from "./Components/Administrator";
import EntryScreen from "./Components/EntryScreen";
import DoctorsPortal from "./Components/DoctorsPortal";
import DrawerContent from "./Components/DrawerContent";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



// stack navigator and screen
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verification}/>
        
        <Stack.Screen name="Book" component={DoctorScreen} />
        <Stack.Screen name="user" component={UserDetail} />
        <Stack.Screen name="Doctors Account" component={DoctorProfile} />
        <Stack.Screen name="admin" component={Adminisrator} />
        <Stack.Screen name="entry" component={EntryScreen} />
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
