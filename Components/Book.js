import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from 'react-native-date-picker';
import { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {AppiontBook} from '../redux/actions/BookingAction';



function Book({ navigation }) {
  const UserBook = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const [fullname, setFullName] = useState("");
  // const [lastname, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [phonenumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  // const HandleFullName = (text) => {
  //   setFullName(text);
  // };

  // const HandleLastName = (text) => {
  //   setLastName(text);
  // };

  const HandleDay = (text) => {
    setDay(text);
  };

  const HandleNumber = (text) => {
    setPhoneNumber(text);
  };

  const HandleTime = (text) => {
    setTime(text);
  };

  const HandleDetails = (text) => {
    setDetails(text);
  };

  const HandleSubmit = () => {
    dispatch(AppiontBook(day,phonenumber,time,details))
    // console.log(day,phonenumber,time,details)
  };
  

  useEffect(()=> {
    // AppiontBook
    console.log('booked')
  }, [])

  
  return (
    <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
      <ScrollView>
        <View style={styles.headertext}>
          <View style={styles.header}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Book an Appointment
            </Text>
            <AntDesign
              name="arrowright"
              size={30}
              style={{ marginLeft: 95 }}
              onPress={() => navigation.navigate("Doctors Account")}
            />
          </View>
          <Text>Please Fill Out The Form Below To Make An </Text>
          <Text style={{ paddingBottom: 30 }}>Appointment</Text>
        </View>
        {/* inputs */}
        <View>
          {/* <TextInput
            placeholder="FullName"
            value={Fullname}
            onChangeText={HandleFullName}
            style={styles.input}
          /> */}
          {/* <TextInput
            placeholder="LastName"
            value={Lastname}
            onChangeText={HandleLastName}
            style={styles.input}
          /> */}
          {/* <TextInput
            placeholder="Day"
            value={day}
            onChangeText={HandleDay}
            style={styles.input}
          /> */}
          <View>
            <DatePicker
               modal
               date={date}
               onConfirm={(date) =>{
                setOpen(false)
                setDate(date)
               }}
               onCancel={() =>{
                setOpen(false)
               }}
              // date={date} 
              // onDateChange={setDate}
            />
          </View>
      
          <TextInput
            placeholder="Phonenumber"
            value={phonenumber}
            onChangeText={HandleNumber}
            style={styles.input}
          />
          <TextInput
            placeholder="Time"
            value={time}
            onChangeText={HandleTime}
            style={styles.input}
          />
          <TextInput
            placeholder="Details"
            value={details}
            onChangeText={HandleDetails}
            multiline={true}
            numberOfLines={5}
            style={styles.input}
          />
        </View>

        {/* submitbutton */}
        <TouchableOpacity onPress={HandleSubmit}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headertext: {
    alignItems: "center",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  input: {
    borderWidth: 0.5,
    padding: 20,
    marginBottom: 40,
    borderRadius: 15,
  },
  submit: {
    alignSelf: "center",
    backgroundColor: "#41c1f9",
    height: 60,
    width: 150,
    paddingLeft: 40,
    paddingTop: 16,
    borderRadius: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
  },

});
export default Book;
