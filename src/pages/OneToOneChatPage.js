import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// import UserContext from "../UserContext";
import ChatSidebar from "../components/ChatSidebar";
import {
  ChatContainer,
  Content,
  MessageInputContainer,
  MessageInputField,
  SendButton,
  ChatMessageWrapper,
} from "../components/styles"; // 필요한 스타일 가져오기

let socket; // WebSocket 인스턴스를 전역 변수로 선언

const OneToOneChatPage = () => {
  const { roomId } = useParams(); // roomId 파라미터 가져오기
  const { userId } = useParams(); // userId 파라미터 가져오기
  // const { userId } = useContext(UserContext); // Context에서 사용자 이름 가져오기
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // WebSocket URL에 방 ID만 포함하여 연결
    socket = new WebSocket(ONE2ONECHAT_API_URL + `/${roomId}`);

    // WebSocket이 열렸을 때 호출됨
    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    // 서버로부터 메시지를 받았을 때 호출됨
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data); // JSON 파싱
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // 컴포넌트가 언마운트될 때 WebSocket 연결 닫기
    return () => {
      socket.close();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (inputMessage) {
      const payload = {
        roomId,
        userId: userId,
        message: inputMessage,
      };
      socket.send(JSON.stringify(payload)); // 서버로 메시지 전송
      console.log(userId);
      setInputMessage(""); // 입력 필드 초기화
    }
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
            <ChatMessageWrapper
              key={index}
              isbot={
                userId !== roomId
                  ? msg.userId === roomId
                  : msg.userId !== roomId
              } // 본인 메시지는 오른쪽, 상대방 메시지는 왼쪽
            >
              {msg.message}
            </ChatMessageWrapper>
          ))}
        </div>
        <MessageInputContainer>
          <MessageInputField
            type="text"
            placeholder="메시지를 입력하세요"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <SendButton onClick={sendMessage} />
        </MessageInputContainer>
      </Content>
    </ChatContainer>
  );
};

export default OneToOneChatPage;
