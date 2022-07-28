import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import {AntDesign, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';


function DoctorProfile({navigation}){
    return(
        <SafeAreaView style={{marginHorizontal: 10, flex: 1}}>
            <ScrollView>
            {/* patient update */}
            <View style={styles.update}>
                <Text style={{fontWeight: '800', fontSize: 17}}>Update From Patients</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('admin')}>
                <AntDesign name='arrowright' size={30}/>
                </TouchableOpacity>
            </View>
            {/* recent update */}
            <View style={styles.recentUpdate}>
                <TouchableOpacity>
                <MaterialCommunityIcons name='refresh' size={30} style={{alignSelf: 'center', color: 'pink',}}/>    
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'pink'}}>Recent Bookings</Text>
                </TouchableOpacity>
                {/* Hanging request */}
                <TouchableOpacity>
                <Entypo name='lock-open' size={30} style={{alignSelf: 'center' ,color: 'pink'}}/>    
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'pink'}}>Hanging Bookings</Text>
                </TouchableOpacity>
            </View>
            {/* patient booking */}
         <View style={styles.profile}>
          <View style={{flexDirection: 'row', marginLeft: 2}}>
          <Image
            source={require("../assets/girl.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
          </View>
          {/* hanging */}
          <View style={{flexDirection: 'row', marginLeft: 8}}>
          <Image
            source={require("../assets/girl.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
          </View>
        </View>
        {/* second section */}
        <View style={styles.profile}>
          <View style={{flexDirection: 'row', marginLeft: 2}}>
          <Image
            source={require("../assets/girl.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
          </View>
          {/* hanging */}
          <View style={{flexDirection: 'row', marginLeft: 8}}>
          <Image
            source={require("../assets/girl.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
          </View>
        </View>
        {/*  */}
        



        
        </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
   update:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 50,
    marginBottom: 10
   },
   recentUpdate:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom:10
   },
   profile: {
    flexDirection: "row",
    paddingTop: 15,
  },
})
export default DoctorProfile;