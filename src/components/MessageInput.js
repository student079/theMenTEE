import React, { useState } from "react";
import { MessageInputField, SendButton, MessageInputContainer } from "./styles";

const MessageInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <MessageInputContainer>
      <MessageInputField
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="매칭봇과 대화를 나눠보세요."
      />
      <SendButton onClick={handleSend} />
    </MessageInputContainer>
  );
};

export default MessageInput;
