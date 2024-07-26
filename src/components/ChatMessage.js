import React from "react";
import { ChatMessageWrapper } from "./styles";

const ChatMessage = ({ text, isbot }) => {
  return <ChatMessageWrapper isbot={isbot}>{text}</ChatMessageWrapper>;
};

export default ChatMessage;
