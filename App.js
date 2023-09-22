import { StyleSheet, Text, View } from "react-native";
import MainStack from "./navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
