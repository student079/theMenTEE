import React, { useState, useContext } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatMessage from "../components/ChatMessage";
import MessageInput from "../components/MessageInput";
import MatchSuccessPopup from "../components/MatchSuccessPopup";
import { ChatContainer, Content } from "../components/styles";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
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
  const [matchedMentor, setMatchedMentor] = useState(null);
  const navigate = useNavigate();
  const { username } = useContext(UserContext); // Context에서 사용자 이름 가져오기

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, isbot: false }]);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CHATBOT_API_URL}/recommend`,
        {
          prompt: message,
        }
      );
      console.log(response);
      if (response.data) {
        let results = response.data.data;
        if (results.length === 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "매칭되는 현직자가 없습니다. 다른 질문을 시도해보세요.",
              isbot: true,
            },
          ]);
        } else {
          results = results.recommendations;
          results.forEach((mentor) => {
            const mentorResponse = JSON.stringify(mentor);
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: mentorResponse, isbot: true },
            ]);
          });
        }
      }
    } catch (error) {
      console.error("Error sending message to server:", error);
    }
  };

  const handleMatchClick = (mentorNickname) => {
    setMatchedMentor(mentorNickname);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate(`/one-to-one-chat/${matchedMentor}/${username}`);
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
            <ChatMessage
              key={index}
              text={msg.text}
              isbot={msg.isbot}
              onMatch={handleMatchClick}
            />
          ))}
        </div>
        <MessageInput onSend={handleSend} />
        {showPopup && (
          <MatchSuccessPopup
            mentorNickname={matchedMentor}
            onClose={handleClosePopup}
          />
        )}
      </Content>
    </ChatContainer>
  );
};

export default ChatBotPage;
