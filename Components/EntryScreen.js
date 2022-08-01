import {View,Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
function EntryScreen({navigation}){
    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require('../assets/admin.jpg')} resizeMode='cover' style={{height: '100%'}}>
                <View style={styles.header}>
                <Text style={{fontWeight: '800', fontSize: 17}}>Doctors Detail</Text>
                <TouchableOpacity   onPress={() => navigation.navigate('doctorsportal')}  > 
                <AntDesign name="arrowright" size={30} color="black" />
                </TouchableOpacity>
                </View>
                <View style={styles.input}>

                {/* name */}
                <View style={styles.inputText}>
                <TextInput placeholder='Doctor Name ' style={{fontWeight: '600', fontSize: 16}}/>
                </View>

                {/* surname */}
                <View style={styles.inputText}>
                <TextInput placeholder='Surname' style={{paddingTop: 45,fontWeight: '600', fontSize: 16}}/>
                </View>
                {/* Specialisation */}
                <View style={styles.inputText}>
                <TextInput placeholder='Specialization' style={{paddingTop: 45, fontWeight: '600', fontSize: 16}}/>
                </View>
                {/* Age */}
                <View style={styles.inputText}>
                <TextInput placeholder='Age' style={{paddingTop: 45, fontWeight: '600', fontSize: 16}}/>
                </View>

                
                {/* email */}
                <View style={styles.inputText}>
                <TextInput placeholder='Email' style={{paddingTop: 45,fontWeight: '600', fontSize: 16}}/>
                </View>
                {/* number */}
                <View style={styles.inputText}>
                <TextInput placeholder='Phone Number' style={{paddingTop: 45,fontWeight: '600', fontSize: 16}}/>
                </View>
                </View>


                {/* TouchableOpacity */}
                <TouchableOpacity style={{marginTop: 30}}>
                    <Text style={styles.completebutton}>Complete</Text>
                </TouchableOpacity>
            </ImageBackground>
            
        </SafeAreaView>
    )
}

 const styles = StyleSheet.create({
    input:{
        flexDirection: 'column',
        padding: 30
    },
    
    inputText:{
        borderBottomWidth: 1,
    },
    completebutton:{
        alignItems:'center',
        backgroundColor: '#41c1f9',
         width: 150, height: 60,
          alignSelf: 'center', 
          paddingLeft: 35,
          paddingTop: 15,
           borderRadius: 15,
           fontWeight: 'bold',
           color: 'white'

    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        marginTop:70
    }
 })
export default EntryScreen;