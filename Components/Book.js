import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Book({ navigation }) {
  return (
    <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
      <ScrollView>
        <View style={styles.headertext}>
          <View style={styles.header}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Book an Appointment
            </Text>
            <AntDesign
              name="arrowright"
              size={30}
              style={{ marginLeft: 115 }}
              onPress={() => navigation.navigate("Doctors Account")}
            />
          </View>
          <Text>Please Fill Out The Form Below To Make An </Text>
          <Text style={{ paddingBottom: 30 }}>Appointment</Text>
        </View>
        {/* inputs */}
        <View>
          <TextInput placeholder="FullName" style={styles.input} />
          <TextInput placeholder="LastName" style={styles.input} />
          <TextInput placeholder="Address" style={styles.input} />
          <TextInput placeholder="Date" style={styles.input} />
          <TextInput placeholder="FullName" style={styles.input} />
          <TextInput placeholder="FullName" style={styles.input} />
        </View>

        {/* submitbutton */}
        <TouchableOpacity>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headertext: {
    alignItems: "center",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  input: {
    borderWidth: 0.5,
    padding: 20,
    marginBottom: 40,
    borderRadius: 15,
  },
  submit: {
    alignSelf: "center",
    backgroundColor: "#41c1f9",
    height: 60,
    width: 150,
    paddingLeft: 40,
    paddingTop: 16,
    borderRadius: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
  },
});
export default Book;
