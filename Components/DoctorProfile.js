import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';


function DoctorProfile({navigation}){
    return(
        
        <View>
        <TouchableOpacity  onPress={()=> navigation.navigate('admin')}>
        <Text style={{backgroundColor: 'red', alignSelf: 'center',padding:10,marginTop: 50}} >hello</Text>
        </TouchableOpacity>
        </View>
        


        

    )
}
export default DoctorProfile;