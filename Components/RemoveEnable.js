import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

function RemoveEnable({ navigation }) {
  // const DEnable = () => {
  //   navigation.navigate("entry");
  // };
  return (
    <>
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
        <TouchableOpacity>
          <Text style={{ color: "#41c1f9", fontWeight: "800", marginLeft: 80 }}>
            Remove
          </Text>
        </TouchableOpacity>
        {/* enable button */}
        <TouchableOpacity>
          <Text
            style={{ color: "#41c1f9", fontWeight: "800", marginRight: 20 }}
          >
            Enable
          </Text>
        </TouchableOpacity>
      </View>
    </>
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
export default RemoveEnable;
