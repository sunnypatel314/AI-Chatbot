export const handleSend = async (message) => {
  const newMessage = {
    message: message,
    sender: "user",
  };

  const newMessages = [...messages, newMessage];
  setMessages(newMessages);
  processMessageToChatGPT(newMessages);
};

export async function processMessageToChatGPT(chatMessages) {
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
    .finally(() => setTextInput(""));
}
