import React from "react";
import { Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReusableButton = ({ title, onPress ,RouteName}) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Button
        onPress={() => onPress(RouteName)}
        title={title}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginBottom: 20,
    height: 40,
    width: 160,
  },
});

export default ReusableButton;
ReusableButton;
