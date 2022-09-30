// import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import Login from "./Components/Login";
import Verification from "./Components/Verification";
import DoctorScreen from "./Components/DoctorScreen";
import Book from "./Components/Book";
import DoctorProfile from "./Components/DoctorProfile";
import Adminisrator from "./Components/Administrator";
import DoctorsDetail from "./Components/DoctorsDetail";
import Register from "./Components/Register";
// import DrawerContent from "./Components/DrawerContent";
import Icons from "./Components/Icons";
import Reducer from "./redux/reducers/Reducer";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Drawer Navigation
// import { createDrawerNavigator } from "@react-navigation/drawer";

//Redux
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux
const store = legacy_createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// stack navigator and screen
const Stack = createNativeStackNavigator();

// Drawer navigator and screen
// const Drawer = createDrawerNavigator();

// Drawer funcion
// const Home = () => {
//   return(
//     <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
//       <Drawer.Screen name='DoctorScreen' component={DoctorScreen}/>
//       <Drawer.Screen name="DoctorsPortal" component={DoctorsPortal}/>
//     </Drawer.Navigator>
//   )
// }

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Verification" component={Verification} />

            <Stack.Screen name="Book" component={DoctorScreen}/>
            <Stack.Screen name="user" component={Book}/>
            <Stack.Screen name="Doctors Account" component={DoctorProfile} />
            <Stack.Screen name="admin" component={Adminisrator} />
            <Stack.Screen name="entry" component={DoctorsDetail} />
            {/* <Stack.Screen name="doctorsportal" component={DoctorsPortal} /> */}
            <Stack.Screen name="icon" component={Icons} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
