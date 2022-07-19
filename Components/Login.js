import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      {/* bacground imahe */}
      <ImageBackground
        source={require("../assets/doc.webp")}
        style={styles.bgImage}
      >
        {/* text and start button */}
        <View style={styles.content}>
          <Text style={{ fontSize: 29, color: "#ffff", marginRight: 130 }}>
            Perfect HealthCare Solution
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 450,
                backgroundColor: "pink",
                height: 60,
                textAlign: "center",
                width: 200,
                borderRadius: 15,
                padding: 15,
                color: "#ffff",
              }}
            >
              Get Started
            </Text>
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
  },
  content: {
    alignItems: "center",
    paddingTop: 70,
  },
});
export default Login;
