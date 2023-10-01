import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/textScreen/Header";
import Messages from "../components/textScreen/Messages";
import InputField from "../components/textScreen/InputField";
import { useEffect } from "react";
import { API_KEY } from "@env";

const TextScreen = ({ navigation, route }) => {
  const scrollViewRef = useRef(null);

  const { name } = route.params;

  useEffect(() => {
    handleSend("");
  }, []);

  const [preMessage, setPreMessage] = useState(
    `give me an interesting fact about ${name}`
  );

  const apiKey = API_KEY;
  const systemMessage = {
    role: "system",
    content: preMessage,
  };

  const [messages, setMessages] = useState([
    {
      message: preMessage,
      sender: "user",
    },
  ]);

  const [textInput, setTextInput] = useState("");

  const handleTextInput = (text) => {
    setTextInput(text);
  };

  const handleSend = async (message) => {
    setTextInput("");
    const newMessage = {
      message: message,
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    scrollViewRef.current.scrollToEnd({ animated: true });

    processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
      max_tokens: 50,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
      })
      .catch((error) => console.log(error))
      .finally(() => scrollViewRef.current.scrollToEnd({ animated: true }));
  }

  return (
    <View style={styles.container}>
      <Header name={name} navigation={navigation} />
      <Messages
        messages={messages}
        setMessages={setMessages}
        preMessage={preMessage}
        setPreMessage={setPreMessage}
        navigation={navigation}
        scrollViewRef={scrollViewRef}
      />
      <InputField
        handleSend={handleSend}
        textInput={textInput}
        setTextInput={setTextInput}
        handleTextInput={handleTextInput}
        navigation={navigation}
      />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
});
