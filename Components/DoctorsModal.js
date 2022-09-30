import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {GetDoctors} from "../redux/actions/DoctorAction";
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from 'react';



function DoctorsModal(props) {
  const navigation = useNavigation();

  const CreateDoctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  //console.debug(props.id);



  
    closeModal = (bool, data) => {
      props.changeModalVisible(bool);
      props.setData(data);
    }
    
    

    useEffect(() =>{
      dispatch(GetDoctors());
     }, []);

    const HandleCountinue = () =>{
      if(CreateDoctor.data){
      navigation.navigate('user', { id: props.id})
      }
     
    }
    
  
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.background}>
        <View style={styles.profile}>
          <Image source={require('../assets/cute.webp')}  style={{width:50,height:50,borderRadius:50}}/>
          <View style={{alignItems: 'center',paddingTop: 18}}>
          <Text style={{color: 'white', paddingBottom:10}} >Dr. Ebrima Sow</Text>
          <Text style={{color: 'white', paddingBottom:10}}>Fajara Hospital</Text>
          <Text style={{color: 'white', paddingBottom:10}}>8:00AM TO 5:00PM</Text>
          <Text style={{color: 'white', paddingTop:22,}}>Continue For Your Appointment </Text>
          <Text style={{alignSelf: 'center', color: 'white'}}>Booking</Text>
          </View>
    
        </View>
        {/* buttonsecion */}
        <View style={styles.button} >
        {/*cancelbutton  */}
          <TouchableOpacity 
                 onPress={() => closeModal(false, "Cancel")}>
            <Text  style={{fontWeight: 'bold', color: '#41c1f9'}}>Cancel</Text>
          </TouchableOpacity>
          {/*Continuebutton */}
          <TouchableOpacity
          //  onPress={() => navigation.navigate('user')}
          onPress={HandleCountinue}           
           >
            <Text style={{fontWeight: 'bold', color: '#41c1f9'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80
    
  },
  background:{
    backgroundColor: 'grey',
    width:300,
    height:400,
    borderRadius:15,
  },
  profile:{
    alignItems:"center",
    padding: 30

  },
  button:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding:20,
    marginTop:10,

  }
});
export default DoctorsModal;
