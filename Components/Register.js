import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RRegister } from "../redux/actions/LoginAction";

function Register() {
  //connect
  const Registerr = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleEmail = (text) => {
    setUsername(text);
  };

  const HandlePassword = (text) => {
    setPassword(text);
  };

  const Submit = () => {
    dispatch(RRegister(username, password));
  };

  if (
    Registerr.AuthRegister !== undefined &&
    Registerr.AuthRegister !== "" &&
    Registerr.AuthRegister !== null
  ) {
    //add the user
      Registerr.AuthRegister;
  }

  return (
    <>
      <Text style={styles.register}>Please Register</Text>
      <View style={styles.signUp}>
        <View style={styles.input}>
          <AntDesign name="user" size={25} />
          <TextInput
            placeholder="Email"
            style={{ marginLeft: 25 }}
            value={username}
            onChangeText={HandleEmail}
          />
        </View>

        {/* password */}
        <View style={styles.input}>
          <Entypo name="lock" size={25} />
          <TextInput
            placeholder="Password"
            style={{ marginLeft: 25 }}
            value={password}
            onChangeText={HandlePassword}
          />
        </View>

        {/* sign in and loading */}
        <View>
          <View>
            <TouchableOpacity style={styles.signIn} onPress={Submit}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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

  signIn: {
    marginTop: 50,
    height: 70,
    width: 320,
    borderRadius: 15,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#41c1f9",
    marginTop: 90,
  },
  register: {
    marginTop: 50,
    marginLeft: 120,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 40,
  },
});
export default Register;
