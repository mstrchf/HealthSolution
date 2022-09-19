import { Image, Text, View, TouchableOpacity, StyleSheet, Modal } from "react-native";
import{useState} from 'react';
import DoctorsModal from "./DoctorsModal";
import{useDispatch,useSelector} from 'react-redux';
import{DeleteDoctor,UpdateDoctor} from '../redux/actions/DoctorAction';

function RemoveEnable({ navigation }) {
  const deleteDoctor = useSelector((state)=> state.doctor)
  const  dispatch = useDispatch();
  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [chooseData, setChooseData] = useState();
  
  
    const changeModalVisible = (bool) => {
      setIsModalVisible(bool);
    };
    
    const setData = (data) => {
      setChooseData(data);
    };
    //Delete
    const HandleDelete = () =>{
      dispatch(DeleteDoctor)
    }
    // if(deleteDoctor.CurrentDoctor){
    //   deleteDoctor.CurrentDoctor('');
    // }else{
    //   console.log('can not delete')
    // }

  return (
    <>
        <View style={styles.profile}>
            <TouchableOpacity onPress={() => changeModalVisible(true)} >
            <Image 
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            </TouchableOpacity>
            <View style={{ marginLeft: 30 }}>
            <TouchableOpacity onPress={() => changeModalVisible(true)}>
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                Dr. Ebrima Sow
              </Text>
              <Text style={{ fontWeight: "400", fontSize: 15 }}>Medicine</Text>
                  <Text style={{color: 'grey',fontWeight:'800'}}>Book Now</Text>
                </TouchableOpacity>
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
                <TouchableOpacity onPress={HandleDelete}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>

                
                <TouchableOpacity onPress={() => navigation.navigate("entry")}  >
                  <Text  style={styles.update}>Update</Text>
                </TouchableOpacity>
              </View>
 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 10,
  },

  button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
  },
  remove:{
    marginTop: 10,
    color: "#41c1f9", 
     fontWeight: "800",
      marginLeft: 110

  },
  update:{
    color: "#41c1f9", 
    fontWeight: "800",
     marginRight: 20,
     marginTop: 10
  }
});
export default RemoveEnable;
