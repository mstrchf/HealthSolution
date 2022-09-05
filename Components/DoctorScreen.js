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
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import React, { useState } from "react";
import Doctor from "./Doctor";

function DoctorScreen({ navigation }) {
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      {/* <Text>{chooseData}</Text> */}
      <ScrollView>
        {/* header */}
        <View style={styles.headerDetails}>
          <TouchableOpacity>
            <Ionicons name="menu" size={35} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "800", marginRight: 100 }}>
            Find Your Doctor
          </Text>
        </View>

        {/* icons on specializations */}
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <Ionicons name="heart-circle" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <Ionicons name="eye" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <MaterialCommunityIcons name="bone" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <FontAwesome5 name="tooth" size={24} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("icon")}>
            <MaterialCommunityIcons name="pill" size={30} color="#ffff" />
          </TouchableOpacity>
        </View>
        {/* doctors profile */}
        <View>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 17,
              paddingBottom: 30,
              paddingTop: 30,
              paddingLeft: 6,
            }}
          >
            Book An Appointment
          </Text>
          {/* doctorsProfile */}
          <View>
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
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

    marginTop: 30,
    marginBottom: 30,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#41c1f9",
    borderRadius: 15,
  },
});
export default DoctorScreen;
