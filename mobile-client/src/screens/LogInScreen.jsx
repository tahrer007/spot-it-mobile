import react from "react";
import { View, Text } from "react-native";

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text>log in </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogInScreen;
