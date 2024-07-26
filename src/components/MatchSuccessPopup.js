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
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
        <h2>매칭에 성공했어요!</h2>
        <p>1:1 커피챗 바로가기</p>
        <Button onClick={handleButtonClick}>확인</Button>
      </PopupContent>
    </PopupContainer>
  );
};

export default MatchSuccessPopup;
