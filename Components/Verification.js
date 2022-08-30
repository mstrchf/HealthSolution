import { TouchableOpacity , Text, View, ImageBackground, TextInput, StyleSheet, SafeAreaView, ScrollView , ActivityIndicator} from "react-native";
import {Entypo,AntDesign} from '@expo/vector-icons';
import {useState} from "react";
import axios from "axios";

function Verification({navigation}){
  
// const Items = {
//   username: "",
//   password: "",
// }

  const [loading , setLoading] = useState(false);
  const [input, setInput] = useState({})
  const [password, setpassword] = useState({})


// activity indicator logic
// const Indicate = () => {
//   if(loading === true){
//       setLoading(false);
//   }else{
//       setLoading(true);
//   }
// }


const HandleClick = () =>{
  axios({
    method: 'post',
    url: 'http://172.23.45.149:7222/api/Login/Login',
    data:{
      username: 'hi@gmail.com',
      password: '123n',
    }
  })
  .then((Response)=>{
     console.log(Response.data);
  })
  .catch((error)=>{
    console.log(error.data);

  })
}

// submit
const HandleChange= () =>{
  setInput(input)


  //setInput(...input.event.target.value);

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
      <TouchableOpacity>
      <Text style={{fontWeight: 'bold', color: '#41c1f9'}}>Get One</Text>
      </TouchableOpacity>
      </View>
      {/* username */}
      <View style={styles.signUp}>
        <View  style={styles.input}>
          <AntDesign name="user" size={25}/>
        <TextInput
         placeholder="Email"
        style={{marginLeft: 25}}
        value={input.username}
        onChangeText={HandleChange}
        />
        </View>
        {/* password */}
        <View style={styles.input}>
        <Entypo name="lock" size={25}/>
        <TextInput
         placeholder="Password"
          //secureTextEntry={true}
          style={{marginLeft: 25}}
          value={input.password}
          onChangeText={HandleChange}
          />
        </View>

        {/* sign in and loading */}
        <View>
        <ActivityIndicator size='large'  animating={loading} color='blue' style={styles.ActivityIndicator}/>
       <View style={styles.signIn}>

       {/* onPress={Indicate} */}
        <TouchableOpacity onPress={HandleClick} >
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
