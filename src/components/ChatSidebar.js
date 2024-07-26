import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, Logo, SidebarLogoImage, Nav } from "./styles";
import logo from "../sidebarLogo.png";

const ChatSidebar = () => {
  const location = useLocation();
  const isActive = (path) => {
    const regex = new RegExp(`^${path}(/.*)?$`);
    return regex.test(location.pathname);
  };

  return (
    <Sidebar>
      <Link to="/onboarding">
        <Logo>
          <SidebarLogoImage src={logo} alt="로고" />
        </Logo>
      </Link>
      <Nav>
        <ul>
          <li className={location.pathname === "/chatbot" ? "active" : ""}>
            <Link to="/chatbot">매칭봇과 대화하기</Link>
          </li>
          <li className={isActive("/one-to-one-chat") ? "active" : ""}>
            <Link to="/one-to-one-chat">1:1 커피챗</Link>
          </li>
          <li className={location.pathname === "/my-page" ? "active" : ""}>
            <Link to="/my-page">마이페이지</Link>
          </li>
        </ul>
      </Nav>
    </Sidebar>
  );
};

export default ChatSidebar;
