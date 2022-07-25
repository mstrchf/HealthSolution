import { SafeAreaView, View , Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";

function UserDetail(){
    return(
        <SafeAreaView style={{marginHorizontal: 10}}>
            <View style={styles.text}>
                <Text style={{fontWeight: 'bold', fontSize: 18,paddingBottom:20}}>Book an Appointment</Text>
                <Text>Please Fill Out The Form Below To Make An </Text>
                <Text style={{paddingBottom:30}}>Appointment</Text>
            </View>
            <View>
                <TextInput 
                style={{borderWidth: 0.5,height:50, margin: 10,padding:15, borderRadius: 10}}
                placeholder="FullName"
                />
            </View>
            {/* lastname */}
            <View>
                <TextInput 
                style={{borderWidth: 0.5,height:50, margin: 10,padding:15, borderRadius: 10}}
                placeholder="LastName"
                />
            </View>
            {/* email */}
            <View>
                <TextInput 
                style={{borderWidth: 0.5,height:50, margin: 10,padding:15, borderRadius: 10}}
                placeholder="Email"
                />
            </View>
            {/* password */}
            <View>
                <TextInput 
                style={{borderWidth: 0.5,height:50, margin: 10,padding:15, borderRadius: 10}}
                placeholder="Password"
                />
            </View>
           
            {/* date */}
            <View>
                <TextInput 
                style={{borderWidth: 0.5,height:50, margin: 10,padding:15, borderRadius: 10}}
                placeholder="Date"
                />
            </View>
            {/* time */}
            <View>
                <TextInput 
                style={{borderWidth: 0.5,height:50, margin: 10,padding:15, borderRadius: 10}}
                placeholder="Time"
                />
            </View>

            {/* submitbutton */}
            <TouchableOpacity>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    text:{
        alignItems: 'center',
        paddingTop: 20
    },
    submit:{
        alignSelf: 'center',
        backgroundColor: 'pink',
        height:60, 
        width:150,
        paddingLeft: 40,
        paddingTop:10,
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30


        
    }
    
})
export default UserDetail;