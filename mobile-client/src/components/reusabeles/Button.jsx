import React from "react";
import { Button, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <Button
      onPress={()=>onPress(title)}
      title={title}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 5,
   
  },
});

export default Button;
