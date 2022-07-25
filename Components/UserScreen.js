import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import React, { useState } from "react";
import DoctorsModal from "./DoctorsModal";

function UserScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const changeModalVisible = (bool) => {
    setIsModalVisible(bool);
  };
  const setData = (bool) => {
    setChooseData(data);
  };
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <Text>{chooseData}</Text>
      <ScrollView>
        {/* header */}
        <View style={styles.headerDetails}>
          <Ionicons name="menu" size={29} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "800" }}>
            Find Your Doctor
          </Text>
          <AntDesign name="left" size={29} color="black" />
        </View>
        {/* icons on specializations */}
        <View style={styles.icons}>
          <Ionicons name="heart-circle" size={24} color="#ffff" />
          <Ionicons name="eye" size={24} color="#ffff" />
          <MaterialCommunityIcons name="bone" size={24} color="#ffff" />
          <FontAwesome5 name="tooth" size={24} color="#ffff" />
          <MaterialCommunityIcons name="pill" size={30} color="#ffff" />
        </View>
        {/* doctors profile */}
        <View>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 17,
              paddingBottom: 20,
              paddingTop: 20,
              paddingLeft: 6,
            }}
          >
            Book An Appointment
          </Text>
          <View style={styles.profile}>
            <Image
              source={require("../assets/cute.webp")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 30 }}>
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                Dr. Ebrima Sow
              </Text>
              <Text style={{ fontWeight: "400", fontSize: 15 }}>Medicine</Text>
              {/*modal*/}
              <View>
                <TouchableOpacity
                  onPress={() => changeModalVisible(true)}
                  style={{ backgroundColor: "red", paddingHorizontal: 50 }}
                >
                  <Text style={{ color: "blue", fontSize: 20 }}>Book Now</Text>
                </TouchableOpacity>
              </View>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisible(false)}
              >
                <DoctorsModal
                  changeModalVisible={changeModalVisible}
                  setData={setData}
                />
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "pink",
    borderRadius: 15,
  },
  profile: {
    flexDirection: "row",
    padding: 10,
  },
});
export default UserScreen;
