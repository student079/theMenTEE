import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f0f4ff, #d6e4ff);
`;

export const LoginBox = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  width: 320px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const SidebarLogoImage = styled.img`
  width: 200px;
  height: 70px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  color: #9b9b9b;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: -15px 0 15px 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
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

export const SignUpButton = styled(Button)`
  background-color: #74b9ff;

  &:hover {
    background-color: #54a0ff;
  }
`;

// 채팅 컨테이너 스타일
export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  font-size: 19px;
`;

// 사이드바 스타일
export const Sidebar = styled.div`
  width: 250px;
  background: #f0f4ff;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 15px 0;

    &.active a {
      background-color: #d6e4ff;
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    color: #4a4a4a;
    display: block;
    padding: 10px 15px;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

// 콘텐츠 영역 스타일
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
`;

export const ChatMessageWrapper = styled.div`
  background: ${(props) => (props.isbot ? "#ffeaa7" : "#dfe6e9")};
  color: #2d3436;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  max-width: 60%;
  width: fit-content;
  align-self: ${(props) => (props.isbot ? "flex-start" : "flex-end")};
  position: relative;
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f0f4ff;
  border-radius: 0 0 10px 10px;
`;

export const MessageInputField = styled.input`
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 18px;
`;

export const SendButton = styled(Button)`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  background-color: #6c5ce7;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5a4dbf;
  }

  &::before {
    content: "→";
    font-size: 20px;
    color: white;
  }
`;

export const OnboardingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f0f4ff, #d6e4ff);
`;

export const OnboardingContent = styled.div`
  text-align: center;
`;

export const OnboardingTitle = styled.h1`
  font-size: 32px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const OnboardingSubtitle = styled.p`
  font-size: 18px;
  color: #4a4a4a;
  margin-bottom: 40px;
`;

export const OnboardingButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #6c5ce7;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5a4dbf;
  }
`;
