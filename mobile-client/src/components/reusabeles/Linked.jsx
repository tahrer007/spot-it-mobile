import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Linked = ({ text, routeName }) => {
  const navigation = useNavigation();
  console.log(navigation)

  return (
    <TouchableOpacity OnPress={() => navigation.navigate(routeName)}>
      <Text style={styles.linked}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginBottom: 20,
    height: 40,
    width: 160,
  },
  linked: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Linked;
