import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
function DoctorsDetail({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/admin.jpg")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View style={styles.header}>
          <Text style={{ fontWeight: "800", fontSize: 20 }}>
            Doctors Detail
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("doctorsportal")}
          >
            <AntDesign name="arrowright" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          {/* name */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Doctor Name "
              style={{ fontWeight: "600", fontSize: 16 }}
            />
          </View>

          {/* surname */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Surname"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
            />
          </View>
          {/* Specialisation */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Specialization"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
            />
          </View>
          {/* Age */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Age"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
            />
          </View>

          {/* email */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Email"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
            />
          </View>
          {/* number */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Phone Number"
              style={{ paddingTop: 45, fontWeight: "600", fontSize: 16 }}
            />
          </View>
        </View>

        {/* TouchableOpacity */}
        {/* complete */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 30,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.completebutton}>Complete</Text>
          </TouchableOpacity>

          {/* cancel */}
          <TouchableOpacity>
            <Text style={styles.cancelbutton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "column",
    padding: 30,
  },

  inputText: {
    borderBottomWidth: 1,
  },
  completebutton: {
    alignItems: "center",
    backgroundColor: "#41c1f9",
    width: 120,
    height: 60,
    paddingLeft: 19,
    paddingTop: 15,
    borderRadius: 15,
    fontWeight: "bold",
    color: "white",
  },
  cancelbutton: {
    alignItems: "center",
    backgroundColor: "red",
    width: 120,
    height: 60,
    // alignSelf: "center",
    paddingLeft: 30,
    paddingTop: 15,
    borderRadius: 15,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    marginTop: 20,
  },
});
export default DoctorsDetail;
