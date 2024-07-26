import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

  const handleInputChange = (e) => {
    setNickname(e.target.value);
    setErrorMessage("");
  };

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post("https://your-server-endpoint/login", {
    //     nickname,
    //   });
    //   if (response.data.success) {
    //     navigate("/onboarding");
    //   } else {
    //     setErrorMessage(response.data.message || "로그인 실패");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setErrorMessage("서버 오류가 발생했어요.");
    // }
    navigate("/onboarding");
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
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button onClick={handleLogin}>로그인</Button>
        <SignUpButton>회원가입</SignUpButton>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
