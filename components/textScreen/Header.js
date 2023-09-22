import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <View style={{ height: 50 }}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{props.name}</Text>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
