import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const Header = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const dynamicFontSize = (screenHeight + screenWidth) * 40 ** -1;
  return (
    <View style={{ flex: 0.1 }}>
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: dynamicFontSize }]}>
          Explore Different Subjects
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  title: {
    color: "black",
    fontWeight: "600",
  },
});
