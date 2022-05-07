import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, View, TextInput } from "react-native";
import ReusableButton from "./reusabeles/Button";
import RadioForm from "react-native-simple-radio-button";

const LocationDetailsForm = ({ cordinates, hideModel }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [chosenOption, setChosenOption] = useState("one");
  const [details, setDetails] = useState("");
  const [text, setText] = useState("");

  const options = [
    { label: "one", value: "one" },
    { label: "2-5", value: " 2-5" },
    { label: "more than 5", value: "more than 5" },
  ]; //create our options for radio group
  const onPress = (name) => {
    if (name === "submit") {
      setModalVisible(!modalVisible);
    } else {
      setModalVisible(!modalVisible);
    }

    hideModel();
  };
  useEffect(() => {
    console.log(chosenOption);
  }, [chosenOption]);

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
            initial={0}
            onPress={(value) => {
              setChosenOption(value);
            }}
            animation={true}
          />
          <View style={styles.subContainer}></View>
          <View style={styles.subContainer}></View>

          <Text style={styles.modalText}>Extra details ? </Text>

          {/*   
              //TODO : text input not working with model , also there is no error !!
          <TextInput
           autoCapitalize="none"
            autoCorrect={false}
            placeholder={"add extra details ..."}
            multiline={true}
            numberOfLines={4}
            onChangeText={(val) => setText(val)}
            value={text}
          />*/}
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

  subContainer: {
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    margin: 5,
    paddingLeft: 5,
    marginBottom: 20,
    height: 40,
    width: 200,
  },
});

export default LocationDetailsForm;
