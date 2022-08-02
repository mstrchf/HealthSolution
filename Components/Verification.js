import { TouchableOpacity , Text, View, ImageBackground, TextInput, StyleSheet, SafeAreaView, ScrollView , ActivityIndicator} from "react-native";
import {Entypo,AntDesign} from '@expo/vector-icons';
import {useState} from "react";

function Verification({navigation}){
  const [loading , setLoading] = useState(false);

// activity indicator logic
const Indicate = () => {
  if(loading === true){
      setLoading(false);
  }else{
      setLoading(true);
  }
}


  return(
    <SafeAreaView style={{flex: 1, marginTop: 20}}>
      <ScrollView >
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
      <Text style={{fontWeight: 'bold', color: '#41c1f9'}}>Get One</Text>
      </View>
      <View style={styles.signUp}>
        <View  style={styles.input}>
          <AntDesign name="user" size={25}/>
        <TextInput placeholder="Email"style={{marginLeft: 25}}/>
        </View>
        <View style={styles.input}>
        <Entypo name="lock" size={25}/>
        <TextInput placeholder="Password" secureTextEntry={true}style={{marginLeft: 25}}/>
        </View>

        {/* sign in and loading */}
        <View>
        <ActivityIndicator size='large'  animating={loading} color='blue' style={styles.ActivityIndicator}/>
       <View style={styles.signIn}>
        <TouchableOpacity onPress={Indicate}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
       </View>
       </View>
       {/*  */}
      </View>
      </ScrollView>
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
       flexDirection: 'row',
       borderWidth: 0.5,
       height: 65,
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
    backgroundColor: '#41c1f9',
    marginTop:50
    
  },
  ActivityIndicator:{
    top:15
  }
 
 })
export default Verification;
