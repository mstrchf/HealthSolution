import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* bacground image */}
      <ImageBackground
        source={require("../assets/cot.webp")}
        style={styles.bgImage}
      >
        {/* text and start button */}
        <View style={styles.content}>
          <Text style={{ fontSize: 29, color: "#ffff", marginRight: 130 }}>
            Perfect HealthCare Solution
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Doctor")}>
            {/* <Text
              style={{
                fontWeight: "bold",
                marginTop: 370,
                backgroundColor: "pink",
                height: 60,
                textAlign: "center",
                width: 200,
                borderRadius: 15,
                padding: 15,
                color: "#ffff",
              }}
            > */}
            <AntDesign
              name="arrowright"
              size={24}
              color="white"
              style={{
                fontWeight: "bold",
                marginTop: 370,
                backgroundColor: "pink",
                height: 60,
                textAlign: "center",
                width: 150,
                borderRadius: 15,
                padding: 15,
              }}
            />
            {/* Get Started */}
            {/* </Text> */}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    // alignItems: "center",
    marginLeft: 40,
    justifyContent: "space-between",
    paddingTop: 70,
  },
});
export default Login;
