import {View,Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
function EntryScreen({navigation}){
    return(
        <View>
            <ImageBackground source={require('../assets/admin.jpg')} resizeMode='cover' style={{height: '100%'}}>
                <View style={styles.input}>
                <Text style={{fontWeight: '800', fontSize: 17, alignSelf: 'center', paddingBottom: 50}}>Doctors Detail</Text>
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
                <TouchableOpacity  onPress={() => navigation.navigate('doctorsportal')} style={{marginTop: 30}}>
                    <Text style={styles.completebutton}>Complete</Text>
                </TouchableOpacity>
            </ImageBackground>
            
        </View>
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
        backgroundColor: 'pink',
         width: 150, height: 60,
          alignSelf: 'center', 
          paddingLeft: 35,
          paddingTop: 15,
           borderRadius: 15,
           fontWeight: 'bold',
           color: 'white'

    }
 })
export default EntryScreen;