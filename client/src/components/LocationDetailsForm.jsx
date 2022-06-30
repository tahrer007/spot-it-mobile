import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import ReusableButton from "./reusabeles/Button";
import RadioForm from "react-native-simple-radio-button";
import {addLocation}from "../services/api/locations/locations"

const LocationDetailsForm = ({ newMarker, hideModel }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [chosenOption, setChosenOption] = useState("one");
  const [details, setDetails] = useState("");
  
  

  const options = [
    { label: "one", value: "one" },
    { label: "2-5", value: " 2-5" },
    { label: "more than 5", value: "more than 5" },
  ]; //create our options for radio group
  const onPress = async(name) => {
    if (name === "submit") {
      
      newMarker.number =chosenOption ;  
      newMarker.comment=details ;  
       
      const response = await addLocation(newMarker) ;
      //console.log(response) ;

      setModalVisible(!modalVisible);
    } else {
      setModalVisible(!modalVisible);
    }

    hideModel();
  };
  

  return (
    <Modal
      style={styles.modalView}
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
          {/*   
             <Text style={styles.modalText}>Extra details ? </Text>
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
    width: (Dimensions.get("window").width * 90) / 100,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "flex-start",
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
    justifyContent: "flex-start",
  },
});

export default LocationDetailsForm;
