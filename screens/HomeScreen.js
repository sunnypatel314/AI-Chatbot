import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/homeScreen/Header";
import PickSubject from "../components/homeScreen/PickSubject";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <ScrollView style={styles.content}>
          <PickSubject navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  bottomTabsContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 7,
  },
});
