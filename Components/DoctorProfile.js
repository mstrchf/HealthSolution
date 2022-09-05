import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Patient from "./Patient";

function DoctorProfile({ navigation }) {
  return (
    <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
      <ScrollView>
        {/* patient update */}
        <View style={styles.update}>
          <Text style={{ fontWeight: "800", fontSize: 17 }}>
            Update From Patients
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("admin")}>
            <AntDesign name="arrowright" size={30} />
          </TouchableOpacity>
        </View>
        {/* recent update */}
        <View style={styles.recentUpdate}>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "#41c1f9",
                marginLeft: 15,
              }}
            >
              Recent Bookings
            </Text>
            <Text style={{ paddingTop: 10, fontWeight: "700", marginLeft: 6 }}>
              Today
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
          <Patient />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  update: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    padding: 5,
    marginBottom: 30,
  },
  recentUpdate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
export default DoctorProfile;
