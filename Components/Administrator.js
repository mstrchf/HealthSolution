import {Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
function Adminisrator(){
    return(
      <SafeAreaView style={styles.container}>
        {/* <View style={style.profile}>
          <Image source={require('../assets/cat.webp')} style={{width:50,height:50,borderRadius:50, resizeMode: 'contain'}}/>
          <View>
          <Text>Admin</Text>
          <Text>Hello viewers</Text>
          </View>
        </View> */}
        {/* doctor */}
        <View style={styles.profile}>
          <Image source={require('../assets/cat.webp')} style={{width:50,height:50,borderRadius:50, resizeMode: 'contain'}}/>
          <View>
          <Text>Admin</Text>
          <Text>Hello viewers</Text>
          </View>
        </View>
        {/* buttons */}
        <View  style={styles.button} >
            <TouchableOpacity>
              <Text style={{color: 'pink',fontWeight: '800',marginLeft:20, }}>Add</Text>
            </TouchableOpacity>
          {/*remove*/}
            <TouchableOpacity>
              <Text style={{color: 'pink',fontWeight: '800'}} >Remove</Text>
            </TouchableOpacity>
          {/*enable*/}
          <TouchableOpacity>
              <Text style={{color: 'pink',fontWeight: '800',marginRight:20}} >Enable</Text>
            </TouchableOpacity>
            </View>

        
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container:{
    marginHorizontal:10

  },
  profile:{
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 0.2
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    
  }

})
export default Adminisrator;