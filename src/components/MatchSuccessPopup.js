import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px; /* 적절한 너비 설정 */
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #6c5ce7;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #5a4dbf;
  }
`;

const MatchSuccessPopup = ({ onClose }) => {
  const handleButtonClick = () => {
    onClose();
  };

  return (
    <PopupContainer>
      <PopupContent>
        <Title>매칭에 성공했어요!</Title>
        <Subtitle>1:1 커피챗 바로가기</Subtitle>
        <Button onClick={handleButtonClick}>확인</Button>
      </PopupContent>
    </PopupContainer>
  );
};

export default MatchSuccessPopup;
