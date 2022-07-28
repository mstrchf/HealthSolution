import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
  ImageBackground,
} from "react-native";
function Adminisrator({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require("../assets/test.webp")}
            style={{
              width: 400,
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
                  padding: 20,
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* list of doctors */}
        <View style={styles.profile}>
          <Image
            source={require("../assets/cat.webp")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
        </View>
        {/* button */}
        <View style={styles.button}>
          {/* remove button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginLeft: 80 }}>
              Remove
            </Text>
          </TouchableOpacity>
          {/* enable button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginRight: 20 }}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
        {/* 2 */}
        <View style={styles.profile}>
          <Image
            source={require("../assets/cat.webp")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
        </View>
        {/* button */}
        <View style={styles.button}>
          {/* remove button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginLeft: 80 }}>
              Remove
            </Text>
          </TouchableOpacity>
          {/* enable button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginRight: 20 }}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
        {/* 3 */}
        <View style={styles.profile}>
          <Image
            source={require("../assets/cat.webp")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
        </View>
        {/* button */}
        <View style={styles.button}>
          {/* remove button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginLeft: 80 }}>
              Remove
            </Text>
          </TouchableOpacity>
          {/* enable button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginRight: 20 }}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
        {/* 4 */}
        <View style={styles.profile}>
          <Image
            source={require("../assets/cat.webp")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text style={{ fontWeight: "400" }}>Ophtalmologist</Text>
          </View>
        </View>
        {/* button */}
        <View style={styles.button}>
          {/* remove button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginLeft: 80 }}>
              Remove
            </Text>
          </TouchableOpacity>
          {/* enable button */}
          <TouchableOpacity onPress={() => navigation.navigate("entry")}>
            <Text style={{ color: "pink", fontWeight: "800", marginRight: 20 }}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  profile: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 0.2,
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