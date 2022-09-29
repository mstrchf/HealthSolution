import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import React, { useState,useEffect} from "react";
// import Doctor from "./Doctor";
import { useSelector, useDispatch } from "react-redux";
import {GetDoctors} from "../redux/actions/DoctorAction"
import { useNavigation } from '@react-navigation/native';
  import DoctorsModal from "./DoctorsModal";





function DoctorScreen({ navigation}) {


  const [data, setData] = useState([]);

  const CreateDoctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  //console.debug(CreateDoctor.data.length);  
  if(CreateDoctor.data !== null && CreateDoctor.data !== undefined && data !== CreateDoctor.data){
    console.debug("CreateDoctor.data");
    setData(CreateDoctor.data);
  }


  useEffect(() =>{
    console.debug('dispatching action');
    dispatch(GetDoctors());
 
   }, []);

   
  //  
  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [chooseData, setChooseData] = useState();
  
  
    const changeModalVisible = (bool) => {
      setIsModalVisible(bool);
    };
    
    // const setData = (data) => {
    //   setChooseData(data);
    // };

 
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      {/* <Text>{chooseData}</Text> */}
      <ScrollView>
        {/* header */}
        <View style={styles.headerDetails}>
          <TouchableOpacity onPress={() => navigation.navigate("user")}>
            <Ionicons name="menu" size={35} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "800",  }}>
            Find Your Doctor
          </Text>

          {/*  */}

          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
              <Text
                style={{
                  color:"#41c1f9" ,
                  fontWeight: "800",
                  fontSize: 20
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
        </View>

        {/* icons on specializations */}
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <Ionicons name="heart-circle" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <Ionicons name="eye" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <MaterialCommunityIcons name="bone" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <FontAwesome5 name="tooth" size={24} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <MaterialCommunityIcons name="pill" size={30} color="#ffff" />
          </TouchableOpacity>
        </View>
        {/* doctors profile */}
        <View>
          <Text
            style={styles.book}
          >
            Book An Appointment
          </Text>
          </View>
          {/* doctorsProfile */}
          <View >
          {data.map((x,key)=>{
              return(
                <View >
              <View  style={styles.create}>
                <TouchableOpacity onPress={() => changeModalVisible(true)}  >
                <Image source={require('../assets/cute.webp')}  style={{width:50,height:50,borderRadius:50,marginTop: 60}}/>
                </TouchableOpacity>
                <View style={styles.text}>
                <TouchableOpacity onPress={() => changeModalVisible(true)} >
                <Text style={{fontWeight: 'bold'}}>{x.firstName}</Text>
                <Text>{x.lastName}</Text>
                <Text>{x.spacialization}</Text>
                <Text>{x.number}</Text>
                <Text>{x.email}</Text>
                <Text>{x.age}</Text>
                <Text style={styles.BN}>Book Now</Text>
                </TouchableOpacity>


              {/* model */}
                <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisible(false)}
              >
                  <DoctorsModal
                  changeModalVisible={changeModalVisible}
                  setData={setData}
                />
               </Modal>
                </View>
                </View>


           {/* button */}
            <View style={styles.button}>
              <TouchableOpacity>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={() => navigation.navigate("entry")}>
                <Text   style={styles.update}>Update</Text>
              </TouchableOpacity>
            </View>
                </View>
              )
            })
            }
          </View>
          
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 30,
    marginBottom: 30,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#41c1f9",
    borderRadius: 15,
  },
 
  book:{
    fontWeight: "800",
    fontSize: 17,
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 6,
  },
  BN:{
    fontWeight: '700',
    
  },
  update:{
        color: "#41c1f9", 
        fontWeight: "800",
         marginRight: 20,
         marginTop: 10
      },
  remove:{
            marginTop: 10,
            color: "#41c1f9", 
             fontWeight: "800",
              marginLeft: 40
        
          },
  button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5
  },
  create:{
    // backgroundColor: 'red',
    flexDirection: 'row'

  },
  text:{
    marginLeft: 20
  }


   
});
export default DoctorScreen;
