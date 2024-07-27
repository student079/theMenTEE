import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChatBotPage from "./pages/ChatBotPage";
import OnboardingPage from "./pages/OnboardingPage";
import OneToOneChatPage from "./pages/OneToOneChatPage";
import UnderConstruction from "./pages/UnderConstruction";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route
            path="/one-to-one-chat/:roomId/:userId"
            element={<OneToOneChatPage />}
          />
          <Route path="/one-to-one-chat" element={<UnderConstruction />} />
          <Route path="/my-page" element={<UnderConstruction />} />
          <Route path="/sgin-in" element={<UnderConstruction />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
