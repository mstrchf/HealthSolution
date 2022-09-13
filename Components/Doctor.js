import {
    Text,
    TouchableOpacity,
    View,
    Image,
    Modal,
    StyleSheet
  } from "react-native";
  import{useState} from 'react';
  import DoctorsModal from "./DoctorsModal";

  
function Doctor({navigation}){


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [chooseData, setChooseData] = useState();
  
  
    const changeModalVisible = (bool) => {
      setIsModalVisible(bool);
    };
    
    const setData = (data) => {
      setChooseData(data);
    };



    return(
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
                <TouchableOpacity>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>

                
                <TouchableOpacity onPress={() => navigation.navigate("entry")}  >
                  <Text  style={styles.update}>Update</Text>
                </TouchableOpacity>
              </View>
             
          
          
        </>
    )
}


const styles = StyleSheet.create({
    profile: {
      flexDirection: "row",
      padding: 10,
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
        marginLeft: 90

    },
    update:{
      color: "#41c1f9", 
      fontWeight: "800",
       marginRight: 20,
       marginTop: 10
    }
   
  });
export default Doctor;