import {View, Text, TouchableOpacity, ActivityIndicator, Button, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import React, {useState} from 'react';





function DoctorsPortal(props){
    const [loading, setLoading] = useState(false);



    // const Indicate = () =>{
    //     setLoading(true);
    //     setTimeout(() =>{
    //         setLoading(false);
    //     }, 3000)
    
    // }
    
 const Indicate = () => {
    if(loading === true){
        setLoading(false);
    }else{
        setLoading(true);
    }
 }



    return(
        <View >
            <ActivityIndicator size='large' color='blue' animating={loading} style={{position: 'absolute', top:200,alignSelf: 'center' }}/>
            <TouchableOpacity style={{marginTop: 500}} onPress={Indicate}>
                <Text style={{backgroundColor: 'red', alignSelf: 'center'}}>go</Text>
            </TouchableOpacity>
            
            {/* {
                loading ? (
                    <ActivityIndicator
                    visible={loading}
                    textContent={'loading...'}
                    textStyle={style.spinner}/>

                ) :(
                    <>

                    <Button title='go' onPress={Indicate} />
                    </>
                )
            } */}
    
        </View>
    )
}
// const style = StyleSheet.create({
//     spinner:{
//         top:400
//     }
// })
export default DoctorsPortal;