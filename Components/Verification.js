import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../redux/actions/LoginAction";

function Verification({ navigation }) {
  const authState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const HandlePassword = (text) => {
    setPassword(text);
  };

  const HandleUserName = (text) => {
    setUsername(text);
  };

  //submitButton
  const HandleSubmit = () => {
    dispatch(Login(username, password));
  };

  //if the currentuser not undefine and not empty then the should login and move to the next page
  if (
    authState.currentUser !== undefined &&
    authState.currentUser !== null &&
    authState.currentUser !== ""
  ) {
    var currentUser = authState.currentUser;
    console.debug("redirect to the next screen");
  }

  //authenticate and navigate to the next screen
  useEffect(() => {
    if (currentUser) {
      navigation.navigate("Book");
    }
  }, [currentUser]);

  //else if the currentuser is empty throw error
  if (
    authState.error !== undefined &&
    authState.error !== null &&
    authState.error !== ""
  ) {
    // console.debug(authState);
    // you need to display the error to the user
    // setError("please fill in username and password");
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* backgroungImage */}
        <ImageBackground
          source={require("../assets/imo.webp")}
          style={{ width: "100%", height: 330 }}
        >
          {/* arrow with sin up */}
          <View style={styles.headerSign}>
            <Text style={{ fontWeight: "800", fontSize: 17 }}>Sign Up</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Book")}>
              <AntDesign name="arrowright" size={30} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* inputs */}
        <View style={styles.getAccount}>
          <Text style={styles.account}>Don't Have An Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontWeight: "bold", color: "#41c1f9" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* userInput */}
        <View style={styles.signUp}>
          <View style={styles.input}>
            <AntDesign name="user" size={25} />
            <TextInput
              placeholder="Email"
              style={{ marginLeft: 25 }}
              value={username}
              // onChangeText={(text) => setUsername(text)}
              onChangeText={HandleUserName}
            />
          </View>

          {/* password */}
          <View style={styles.input}>
            <Entypo name="lock" size={25} />
            <TextInput
              placeholder="Password"
              required
              //secureTextEntry={true}
              style={{ marginLeft: 25 }}
              value={password}
              // onChangeText={(text) => setPassword(text)}
              onChangeText={HandlePassword}
            />
          </View>

          {/* sign in and loading */}
          <View>
            <View>
              <TouchableOpacity style={styles.signIn} onPress={HandleSubmit}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  signUp: {
    marginHorizontal: 20,
  },
  getAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  input: {
    flexDirection: "row",
    borderWidth: 0.5,
    height: 70,
    padding: 20,
    marginTop: 40,
    borderRadius: 15,
  },
  headerSign: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  signIn: {
    marginTop: 50,
    height: 70,
    width: 370,
    borderRadius: 15,
    alignItems: "center",
    paddingTop: 19,
    backgroundColor: "#41c1f9",
    marginTop: 50,
  },
  account: {
    fontWeight: "bold",
  },
  // ActivityIndicator:{
  //   top:15,
  // },
});

export default Verification;
