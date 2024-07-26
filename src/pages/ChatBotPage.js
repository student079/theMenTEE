import React, { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatMessage from "../components/ChatMessage";
import MessageInput from "../components/MessageInput";
import MatchSuccessPopup from "../components/MatchSuccessPopup";
import { ChatContainer, Content } from "../components/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChatBotPage = () => {
  const [messages, setMessages] = useState([
    {
      text: "반가워요! '더멘티'와 함께 당신만의 멘토를 찾아보세요.",
      isbot: true,
    },
    {
      text: "먼저, 당신에 대해 소개해주세요.",
      isbot: true,
    },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, isbot: false }]);
    // try {
    //   const response = await axios.post(process.env.CHATBOT_API_URL, {
    //     message,
    //   });
    //   if (response.data) {
    //     setMessages((prevMessages) => [
    //       ...prevMessages,
    //       { text: response.data.reply, isbot: true },
    //     ]);
    //   }
    // } catch (error) {
    //   console.error("Error sending message to server:", error);
    // }

    // 서버 아직 안되어서 테스트용
    setTimeout(() => {
      const botResponse = {
        text: `${message}\n\n여기서 채팅방 서버로 연동되는 주소: localhost:3000/one-to-one-chat/roomId`,
        isbot: true,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000); // 1초 후에 챗봇이 메시지를 보내도록 설정
  };

  const handleMatchClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/one-to-one-chat");
  };

  return (
    <ChatContainer>
      <ChatSidebar />
      <Content>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.map((msg, index) => (
            <ChatMessage key={index} text={msg.text} isbot={msg.isbot} />
          ))}
        </div>
        <MessageInput onSend={handleSend} />
        {showPopup && <MatchSuccessPopup onClose={handleClosePopup} />}
      </Content>
    </ChatContainer>
  );
};

export default ChatBotPage;
