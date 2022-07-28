import { TouchableOpacity , Text, View, ImageBackground, TextInput, StyleSheet, SafeAreaView} from "react-native";
import {AntDesign} from '@expo/vector-icons';

function Verification({navigation}){
  return(
    <SafeAreaView style={{flex: 1, marginTop: 20}}>
      {/* backgroungImage */}
      <ImageBackground source={require('../assets/imo.webp')} style={{width: '100%' ,height: 330}}>
        {/* arrow with sin up */}
        <View style={styles.headerSign}>
        <Text style={{fontWeight: '800', fontSize: 17}}>Sign Up</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Book')}>
        <AntDesign name="arrowright" size={30}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* inputs */}
      <View style={styles.getAccount}>
      <Text style={{fontWigeht: '700'}}>Don't Have An Account?</Text>
      <Text style={{fontWigeht: '600'}}>Get One</Text>
      </View>
      <View style={styles.signUp}>
        <View  style={styles.input}>
        <TextInput placeholder="Email" />
        </View>
        <View style={styles.input}>
        <TextInput placeholder="Password" />
        </View>
       <View style={styles.signIn}>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
       </View>
      </View>
    </SafeAreaView>

  )
};
 const styles = StyleSheet.create({
  signUp:{
    marginHorizontal: 20
  },
  getAccount:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
  },
  input:{
       borderWidth: 0.5,
       height: 60,
       padding: 20,
       marginTop: 40, 
       borderRadius: 15,
  },
  headerSign:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:25,
    marginTop: 10
  },
  signIn:{
    marginTop: 50,
    height:60,
    width: 370,
    borderRadius: 15,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: 'pink',
    marginTop:70
    
  }
 
 })
export default Verification;
