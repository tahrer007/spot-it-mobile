import React from "react";
import { Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReusableButton = ({ title, onPress ,routeName}) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Button
        onPress={() => onPress(routeName)}
        title={title}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    margin: 10,
    height: 40,
    width: 100,
  },
});

export default ReusableButton;
ReusableButton;
