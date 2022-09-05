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
import axios from "axios";
import{useDispatch} from 'react-redux';

function Verification({ navigation }) {
 const dispatch = useDispatch();
  

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading , setLoading] = useState(false);
  

  // submit
  const HandleChange = () => {
    console.log(username);
    console.log(password);

    axios
      .post("http://172.23.45.149:7222/api/Login/Login", {
        headers:{
          'Content-Type': "application/json",
          username: username,
          password: password,
        }
        
      })
      .then((Response) => {
        console.log(data)
        const data = Response;
        dispatch(acttion.setUser(data));
        
      })
      .catch((error) => {
        console.log(Response.data);

        if(error.Response.status == 422){
          setError({status: 422 , message: "username and password is required"});
        }
      })
      .finally(()=>{
        setLoading(false);
        setTimeout(() => {
          setLoading(true)

        });
      } , 5000)
  };

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
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "#41c1f9" }}>
              Get One
            </Text>
          </TouchableOpacity>
        </View>
        {/* userInput */}
        <View style={styles.signUp}>
          <View
            style={styles.input}
          >
            <AntDesign name="user" size={25} />
            <TextInput
              placeholder="Email"
              style={{ marginLeft: 25 }}
              value={username}
              onChangeText={(text) => setUsername(text)}
              
            />
          </View>
          {/*  */}
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
              <ActivityIndicator size='large' animating={loading} style={styles.ActivityIndicator}/>
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
  account:{
    fontWeight: "bold"
  },
  ActivityIndicator:{
    top:15,
  }
});
export default Verification;
