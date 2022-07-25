import {
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";

function DoctorsModal(props) {
  // const WIDTH = Dimensions.get("window").width;
  // const HEIGHT_MODAL = 150;
  
    closeModal = (bool, data) => {
      props.changeModalVisible(bool);
      props.setData(data);
    };
  
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.background}>
        <View>
          <Text>hello world</Text>
          <Text>hello from nyima</Text>
        </View>
        {/*cancelbutton  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <TouchableOpacity onPress={() => closeModal(false, "Cancel")}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          {/*okbutton */}
          <TouchableOpacity onPress={() => closeModal(false, "Ok ")}>
            <Text>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "green",
    width: 200,
    height: 200,
    borderRadius: 15,
    paddingTop: 10,
    // width: WIDTH - 80,
    // height: HEIGHT_MODAL,
  },
});
export default DoctorsModal;
