import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    Modal,
  } from "react-native";
  import {
    Ionicons,
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  
  function DoctorsScreen({ navigation }) {
    return (
      <SafeAreaView style={{ marginHorizontal: 10 }}>
        <ScrollView>
          {/* header */}
          <View style={styles.header}>
            <Ionicons
              name="menu"
              size={29}
              color="black"
              style={{ marginLeft: 5, paddingTop: 3 }}
            />
            {/* <AntDesign name="left" size={24} color="black" /> */}
            <Text style={{ fontWeight: "bold", fontSize: 17, marginRight: 140 }}>
              Find Your Doctor
            </Text>
          </View>
          {/* specialiasation */}
          <View style={styles.icons}>
            <Ionicons name="heart-circle" size={30} color="white" />
            <FontAwesome5 name="tooth" size={24} color="white" />
            <MaterialCommunityIcons name="pill" size={30} color="white" />
            <MaterialCommunityIcons name="bone" size={30} color="white" />
          </View>
          {/* doctors */}
          <Text style={{ fontWeight: "bold", fontSize: 17, padding: 10 }}>
            Book An Appointment
          </Text>
          {/* doctor1 */}
          <View style={styles.doctor}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={styles.doctorText}>
              <Text>Ebrima Sow</Text>
              <Text>Medicine</Text>
            </View>
          </View>
          {/* <View style={styles.doctor1}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dr. Ebrima Sow
              </Text>
              <Text style={{ fontWeight: "500" }}>Neuro Medicine at Fajara</Text>
              <Modal transparent={true} visible={true}>
                <View
                  style={{
                    backgroundColor: "red",
                    margin: 50,
                    borderRadius: 15,
                    flex: 1,
                  }}
                >
                  <Text style={{ marginTop: 350, marginLeft: 100 }}>
                    Book Now
                  </Text>
                </View>
              </Modal>
            </View>
          </View> */}
          {/* doctor2 */}
          <View style={styles.doctor1}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dr. Ebrima Sow{" "}
              </Text>
              <Text style={{ fontWeight: "500" }}>Neuro Medicine at Fajara</Text>
            </View>
          </View>
          {/* doctor3 */}
          {/* <View style={styles.doctor1}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dr. Ebrima Sow{" "}
              </Text>
              <Text style={{ fontWeight: "500" }}>Neuro Medicine at Fajara</Text>
            </View>
          </View> */}
          {/* doctor4 */}
          {/* <View style={styles.doctor1}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dr. Ebrima Sow
              </Text>
              <Text style={{ fontWeight: "500" }}>Neuro Medicine at Fajara</Text>
            </View>
          </View> */}
          {/* doctor5 */}
          {/* <View style={styles.doctor1}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dr. Ebrima Sow
              </Text>
              <Text style={{ fontWeight: "500" }}>Neuro Medicine at Fajara</Text>
            </View>
          </View> */}
          {/* doctor6 */}
          {/* <View style={styles.doctor1}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dr. Ebrima Sow{" "}
              </Text>
              <Text style={{ fontWeight: "500" }}>Neuro Medicine at Fajara</Text>
            </View>
          </View> */}
          <Button title="go" onPress={() => navigation.navigate("user")} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 15,
      paddingBottom: 20,
    },
    icons: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "pink",
      borderRadius: 15,
      padding: 20,
      marginBottom: 10,
    },
    doctor1: {
      // flexDirection: "row",
      // padding: 20,
      padding: 20,
      marginBottom: 30,
      backgroundColor: "#b3b5b9",
      height: 150,
      marginTop: 10,
      borderRadius: 15,
    },
    doctorText: {
      marginLeft: 30,
    },
  });
  export default DoctorsScreen;
  