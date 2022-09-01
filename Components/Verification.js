import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  onfouse,
  ActivityIndicator,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";

function Verification({ navigation }) {
  const Color = {
    red: "red",
    blue: "79785B",
    light: "#F3F4FB",
  };
  const ShowErrror = () => {
    if (error) {
      <Text
        style={{
          color: "red",
          fontSize: 15,
          marginTop: 8,
          marginLeft: 15,
        }}
      >
        Email is required
      </Text>;
    } else {
      setError(Color.blue);
    }
  };

  // const [loading , setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focuse, setFocuse] = useState(false);
  const [error, setError] = useState();

  // activity indicator logic
  // const Indicate = () => {
  //   if(loading === true){
  //       setLoading(false);
  //   }else{
  //       setLoading(true);
  //   }
  // }

  // const HandleClick = () =>{

  // }

  // submit
  const HandleChange = () => {
    console.log(username);
    console.log(password);

    axios
      .post("http://172.23.45.149:7222/api/Login/Login", {
        username: username,
        password: password,
      })
      .then((Response) => {
        console.log(Response.message);
      })
      .catch((Response) => {
        console.debug(Response);
        console.log(Response.message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <Text style={{ fontWigeht: "700" }}>Don't Have An Account?</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "#41c1f9" }}>
              Get One
            </Text>
          </TouchableOpacity>
        </View>
        {/* userInput */}
        <View style={styles.signUp}>
          <View
            style={[
              styles.input,
              {
                borderColor: error
                  ? Color.red
                  : focuse
                  ? Color.blue
                  : Color.grey,
              },
            ]}
          >
            <AntDesign name="user" size={25} />
            <TextInput
              // error={error}
              placeholder="Email"
              style={{ marginLeft: 25 }}
              value={username}
              onChangeText={(text) => setUsername(text)}
              focuse={() => {
                onfouse();
                setFocuse(true);
              }}
              onBlur={() => {
                setFocuse(false);
              }}
            />
          </View>
          {ShowErrror}
          {/* password */}
          <View style={styles.input}>
            <Entypo name="lock" size={25} />
            <TextInput
              placeholder="Password"
              //secureTextEntry={true}
              style={{ marginLeft: 25 }}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {/* sign in and loading */}
          <View>
            {/* <ActivityIndicator size='large'  animating={loading} color='blue' style={styles.ActivityIndicator}/> */}
            <View>
              {/* onPress={Indicate} */}
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => HandleChange(username)}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*  */}
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
    marginTop: 10,
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
  // ActivityIndicator:{
  //   top:15
  // }
});
export default Verification;
