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
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {AddDoctor,} from "../redux/actions/DoctorAction";
function DoctorsDetail({ navigation }) {
  const CreateDoctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  //state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [spacialization, setSpacialization] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const HandleFirstName = (text) => {
    setFirstName(text);
  };
  const HandleLastName = (text) => {
    setLastName(text);
  };

  const HandleSpacialise = (text) => {
    setSpacialization(text);
  };

  const HandleAge = (text) => {
    setAge(text);
  };

  const HandleEmail = (text) => {
    setEmail(text);
  };

  const HandleNumber = (text) => {
    setNumber(text);
  };

  //submitButton
  const Complete = () => {
    dispatch(AddDoctor(firstName, lastName, spacialization, number, email,age))

    if( CreateDoctor.CurrentDoctor){
      navigation.navigate('Book')
    }
    
  };

 
  useEffect(() =>{
    AddDoctor
  }, [])

  
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
                style={{ fontSize: 18 }}
              />
            </View>

            {/* surname */}
            <View style={styles.inputText}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Last Name"
                value={lastName}
                onChangeText={HandleLastName}
              />
            </View>
            {/* Specialisation */}
            <View style={styles.inputText}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Specialization"
                value={spacialization}
                onChangeText={HandleSpacialise}
              />
            </View>
            {/* Age */}
            <View style={styles.inputText}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Phonenumber"
                value={number}
                onChangeText={HandleNumber}
              />
            </View>

            {/* email */}
            <View style={styles.inputText}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={email}
                onChangeText={HandleEmail}
              />
            </View>
            {/* number */}
            <View style={styles.inputText}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Age"
                value={age}
                onChangeText={HandleAge}
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
            <TouchableOpacity onPress={() => navigation.navigate('Book')}>
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
  inputStyle: {
    fontSize: 18,
    paddingTop: 45,
  },
});
export default DoctorsDetail;
