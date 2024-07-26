import React from "react";
import { useNavigate } from "react-router-dom";
import {
  OnboardingContainer,
  OnboardingContent,
  OnboardingTitle,
  OnboardingSubtitle,
  OnboardingButton,
} from "../components/styles";
import logo from "../logo.png"; // 로고 이미지 경로를 적절히 수정하세요

const OnboardingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/chatbot");
  };
  return (
    <OnboardingContainer>
      <OnboardingContent>
        <img
          src={logo}
          alt="THE MENTEE"
          style={{ width: "100px", marginBottom: "20px" }}
        />
        <OnboardingTitle>THE MENTEE</OnboardingTitle>
        <OnboardingSubtitle>
          반가워요! 더멘티와 함께 당신에게 딱 맞는 멘토를 빠르고 쉽게
          찾아보세요.
        </OnboardingSubtitle>
        <OnboardingButton onClick={handleButtonClick}>
          나만의 멘토 찾기
        </OnboardingButton>
      </OnboardingContent>
    </OnboardingContainer>
  );
};

export default OnboardingPage;
