import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Speech from "expo-speech";

export default function Messages(props) {
  const [isSpeakingArray, setIsSpeakingArray] = useState([]);

  const handleSpeaker = (text, index) => {
    Speech.speak(text, {
      onStart: () => {
        isSpeakingArray[index] = true;
        setIsSpeakingArray([...isSpeakingArray]);
        console.log(isSpeakingArray);
      },
      onDone: () => {
        isSpeakingArray[index] = false;
        setIsSpeakingArray([...isSpeakingArray]);
        console.log(isSpeakingArray);
      },
    });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        props.scrollViewRef.current.scrollToEnd({ animated: true });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleDoubleTap = () => {
    console.log("Success");
  };

  return (
    <View behavior="padding" enabled={true} style={{ flex: 1, marginTop: 20 }}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={-150}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsScrollIndicator={true}
          style={styles.container}
          ref={props.scrollViewRef}
        >
          {props.messages.slice(2).map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                {
                  justifyContent:
                    message.sender !== "ChatGPT" ? "flex-end" : null,
                },
              ]}
            >
              {message.sender === "ChatGPT" && (
                <View style={styles.iconContainerLeft}>
                  {message.sender === "ChatGPT" ? (
                    <FontAwesome name="android" size={20} color="black" />
                  ) : (
                    <FontAwesome name="user" size={20} color="black" />
                  )}
                </View>
              )}
              <TouchableWithoutFeedback
                onPress={() => handleSpeaker(message.message, index)}
                disabled={isSpeakingArray.includes(true)}
              >
                <View
                  style={
                    message.sender === "ChatGPT"
                      ? styles.leftMsg
                      : styles.rightMsg
                  }
                >
                  <Text style={styles.message}>{message.message}</Text>
                </View>
              </TouchableWithoutFeedback>
              {message.sender !== "ChatGPT" && (
                <View style={styles.iconContainerRight}>
                  <FontAwesome name="user" size={16} color="black" />
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    //flexDirection: "column-reverse",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  leftMsg: {
    backgroundColor: "#F5DEB3",
    maxWidth: "80%",
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
    marginLeft: 8,
  },
  rightMsg: {
    backgroundColor: "#DCDCDC",
    maxWidth: "80%",
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
    marginRight: 8,
    alignSelf: "flex-end",
  },
  message: {
    fontSize: 16,
    color: "black",
  },
  iconContainerLeft: {
    marginRight: 8,
  },
  iconContainerRight: {
    marginLeft: 8,
  },
});
