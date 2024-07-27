import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import logo from "../logo.png";
import {
  Container,
  LoginBox,
  Logo,
  LogoImage,
  Title,
  Subtitle,
  Input,
  ErrorMessage,
  Button,
  SignUpButton,
} from "../components/styles";

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);

  const handleInputChange = (e) => {
    setNickname(e.target.value);
    setErrorMessage("");
  };

  const handleLogin = async () => {
    if (nickname.trim() !== "") {
      setUsername(nickname);
      navigate("/onboarding");
    } else {
      setErrorMessage("닉네임을 입력해주세요");
    }
  };

  const handleSignin = async () => {
    navigate("/sgin-in");
  };

  return (
    <Container>
      <LoginBox>
        <Logo>
          <LogoImage src={logo} alt="로고" />
        </Logo>
        <Subtitle>나만을 위한 커피챗 매칭봇,</Subtitle>
        <Title>THE MENTEE</Title>
        <Input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button onClick={handleLogin}>로그인</Button>
        <SignUpButton onClick={handleSignin}>회원가입</SignUpButton>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
