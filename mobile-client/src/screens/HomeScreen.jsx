import react from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text> home </Text>
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

export default HomeScreen;
