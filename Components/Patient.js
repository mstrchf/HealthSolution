import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";

function Patient() {
  return (
    <>
      {/* patient booking */}
      <View style={styles.profile}>
        <View style={{ flexDirection: "row", marginLeft: 2 }}>
          <Image
            source={require("../assets/girl.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "800" }}>Mariama Bah</Text>
            <Text>Sukuta, 09:30 PM</Text>
            <Text>16 yrs</Text>
          </View>
        </View>
        {/* approve button */}
        <TouchableOpacity style={styles.approve}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Approve</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    padding: 15,
  },
  approve: {
    backgroundColor: "#41c1f9",
    width: 95,
    borderRadius: 10,
    padding: 9,
    height: 50,
  },
});
export default Patient;
