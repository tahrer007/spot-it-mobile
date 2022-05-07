import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ReusableButton from "./reusabeles/Button";

const LocationDetailsForm = ({ cordinates,hideModel }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const onPress = (name) => {
    if (name === "submit") {
      setModalVisible(!modalVisible);
    } else {
      setModalVisible(!modalVisible);
    }

    hideModel();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        //Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <View style={styles.buttonsBox}>
            <ReusableButton
              title={"Submit"}
              onPress={onPress}
              routeName={"submit"}
            />
            <ReusableButton
              title={"Cancel"}
              onPress={onPress}
              routeName={"cancel"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonsBox: {
    flexDirection: "row",
  },
});

export default LocationDetailsForm;
