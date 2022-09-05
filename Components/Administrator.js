import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import RemoveEnable from "./RemoveEnable";
function Adminisrator({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require("../assets/test.webp")}
            style={{
              height: 300,
              borderRadius: 10,
              resizeMode: "contain",
            }}
          >
            {/* add button */}
            <TouchableOpacity onPress={() => navigation.navigate("entry")}>
              <Text
                style={{
                  color: "pink",
                  fontWeight: "800",
                  alignSelf: "flex-end",
                  paddingTop: 50,
                  fontSize: 16,
                  marginRight: 25,
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        {/* list of doctors */}
        <View>
          <RemoveEnable />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 0.2,
    marginHorizontal: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  // button:{
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding:10,

  // }
});
export default Adminisrator;
