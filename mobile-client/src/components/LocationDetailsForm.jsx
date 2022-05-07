import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ReusableButton from "./reusabeles/Button";
import RadioForm from "react-native-simple-radio-button";

const LocationDetailsForm = ({ cordinates, hideModel }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [chosenOption, setChosenOption] = useState("apple"); //will store our current user options
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
  ]; //create our options for radio group
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
          <Text style={styles.modalText}>Add some details :</Text>
          <Text style={styles.modalText}>How many of them ?</Text>

          <RadioForm
            radio_props={options}
            initial={0} //initial value of this group
            onPress={(value) => {
              setChosenOption(value);
            }} //if the user changes options, set the new value
          />
          <View style={styles.subContainer}></View>
          <View style={styles.subContainer}></View>

          <Text style={styles.modalText}>Extra details ? </Text>
          <View style={styles.subContainer}>
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
  subContainer: {
    flexDirection: "row",
  },
});

export default LocationDetailsForm;
