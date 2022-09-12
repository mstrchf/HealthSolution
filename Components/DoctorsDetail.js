import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import  {useState} from "react";
function DoctorsDetail({ navigation }) {

  //state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [spacialise, setSpacialise] = useState("");
  const [age, setAge] = useState ("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

const HandleFirstName = (text) =>{
  setFirstName(text)
}
const HandleLastName = (text) =>{
  setLastName(text)
}

const HandleSpacialise = (text) =>{
  setSpacialise(text)
}

const HandleAge = (text) =>{
  setAge(text)
}

const HandleEmail = (text) =>{
  setEmail(text)
}

const HandleNumber = (text) =>{
  setNumber(text)
}


//submitButton
const Complete = () =>{
  console.log(firstName)
  console.log(lastName)
  console.log(spacialise)
  console.log(age)
  console.log(email)
  console.log(number)

}

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/admin.jpg")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <ScrollView>
        <View style={styles.header}>
          <Text style={{ fontWeight: "800", fontSize: 20 }}>
            Doctors Detail
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("doctorsportal")}
          >
            <AntDesign name="arrowright" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          {/* name */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Doctor Name "
              value={firstName}
              onChangeText={HandleFirstName}
              style={{  fontSize: 18 }}
            />
          </View>

          {/* surname */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Last Name"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
              value={lastName}
              onChangeText={HandleLastName}
             
            />
          </View>
          {/* Specialisation */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Specialization"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
              value={spacialise}
              onChangeText={HandleSpacialise}
            />
          </View>
          {/* Age */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Age"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
              value={age}
              onChangeText={HandleAge}
            />
          </View>

          {/* email */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Email"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
              value={email}
              onChangeText={HandleEmail}
            />
          </View>
          {/* number */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Phone Number"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
              value={number}
              onChangeText={HandleNumber}
            />
          </View>
        </View>

        {/* TouchableOpacity */}
        {/* complete */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 30,
          }}
        >
          <TouchableOpacity onPress={Complete}>
            <Text style={styles.completebutton}>Complete</Text>
          </TouchableOpacity>

          {/* cancel */}
          <TouchableOpacity>
            <Text style={styles.cancelbutton}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "column",
    padding: 30,
  },

  inputText: {
    borderBottomWidth: 1,
  },
  completebutton: {
    alignItems: "center",
    backgroundColor: "#41c1f9",
    width: 120,
    height: 60,
    paddingLeft: 19,
    paddingTop: 15,
    borderRadius: 15,
    fontWeight: "bold",
    color: "white",
  },
  cancelbutton: {
    alignItems: "center",
    backgroundColor: "red",
    width: 120,
    height: 60,
    // alignSelf: "center",
    paddingLeft: 30,
    paddingTop: 15,
    borderRadius: 15,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    marginTop: 20,
  },
});
export default DoctorsDetail;
