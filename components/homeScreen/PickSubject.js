import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const dynamicFontSize = (screenHeight + screenWidth) * 40 ** -1;

const PickSubject = ({ navigation }) => {
  const appliedMath = require("../../assets/appliedMath.jpg");
  const computerHardware = require("../../assets/computerHardware.png");
  const economy = require("../../assets/economy.jpg");
  const fineArts = require("../../assets/fineArts.jpg");
  const law = require("../../assets/law.jpg");
  const machineLearning = require("../../assets/machineLearning.jpg");
  const physics = require("../../assets/physics.jpg");
  const subjects = [
    "Law",
    "Physics",
    "Applied Mathematics",
    "Economy",
    "Fine Arts",
    "Computer Hardware",
    "Machine Learning",
  ];
  const imageList = [
    appliedMath,
    computerHardware,
    economy,
    fineArts,
    law,
    machineLearning,
    physics,
  ];

  const handlePickedCharacter = (index) => {
    const subject = subjects[index];
    navigation.navigate("TextScreen", {
      name: subject,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {subjects.map((subject, index) => (
          <View key={index} style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handlePickedCharacter(index)}>
              <Image source={imageList[index]} style={styles.image} />
            </TouchableOpacity>
            <View style={{ flex: 0.2 }}></View>
            <Text style={[styles.imageText, { fontSize: dynamicFontSize }]}>
              {subject}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PickSubject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    color: "black",
    marginBottom: 10,
    marginLeft: 10,
  },
  image: {
    width: 225,
    height: 185,
    borderRadius: 10,
    borderWidth: 4,
  },
  scrollView: {},
  imageContainer: {
    marginHorizontal: 10,
  },
  imageText: {
    fontWeight: "400",
    alignSelf: "center",
  },
  imageContainer: {
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
  },
});
