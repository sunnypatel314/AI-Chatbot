import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InputField(props) {
  return (
    <View style={styles.fieldContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything..."
          onChangeText={(text) => props.handleTextInput(text)}
          value={props.textInput}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => props.handleSend(props.textInput)}
        >
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.micContainer}>
        <TouchableOpacity style={styles.micIconButton} onPress={() => {}}>
          <Ionicons name="mic" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    borderRadius: 35,
    marginLeft: 10,
    marginRight: 55,
    position: "relative",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingHorizontal: 8,
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
  micContainer: {
    position: "absolute",
    right: -45,
    top: "50%",
    transform: [{ translateY: -12 }],
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    borderRadius: 20,
    backgroundColor: "white",
    width: 40,
    height: 40,
  },
  micIconButton: {
    padding: 8,
  },
});
