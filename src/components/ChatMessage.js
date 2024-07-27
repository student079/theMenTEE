import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  background: ${(props) => (props.isbot ? "#ffeaa7" : "#dfe6e9")};
  color: #2d3436;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  max-width: 60%;
  width: fit-content;
  align-self: ${(props) => (props.isbot ? "flex-start" : "flex-end")};
  position: relative;
  word-wrap: break-word;
`;

const MentorCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  min-width: 330px;
`;

const MentorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MentorImage = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #6c5ce7;
  margin-right: 15px;
`;

const MentorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const MentorName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const MentorPosition = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const MentorTags = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const MentorTag = styled.span`
  background-color: #dfe6e9;
  border-radius: 5px;
  padding: 3px 6px;
  margin-right: 5px;
`;

const MentorAdditionalInfo = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
`;

const MentorCompany = styled.div`
  margin-bottom: 5px;
`;

const MentorExtraInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#6c5ce7" : "#dfe6e9")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#5a4dbf" : "#b2bec3")};
  }
`;

const ChatMessage = ({ text, isbot, onMatch }) => {
  if (isbot && text.includes("닉네임")) {
    const data = JSON.parse(text);
    return (
      <MessageWrapper isbot={isbot}>
        <MentorCard>
          <MentorInfo>
            <MentorImage>{data.닉네임.charAt(0)}</MentorImage>
            <MentorDetails>
              <MentorName>{data.닉네임} ・ 멘토</MentorName>
              <MentorPosition>{data.직무}</MentorPosition>
              <MentorTags>
                <MentorTag>{data.경력}년</MentorTag>
                <MentorTag>{data.특징}</MentorTag>
              </MentorTags>
              <MentorAdditionalInfo>
                <MentorCompany>{data.회사}</MentorCompany>
                <MentorExtraInfo>
                  <div>회사 분위기: {data.회사분위기}</div>
                </MentorExtraInfo>
              </MentorAdditionalInfo>
            </MentorDetails>
          </MentorInfo>
        </MentorCard>
        <div>
          <ButtonsWrapper>
            <Button primary onClick={() => onMatch(data.닉네임)}>
              매칭할래요
            </Button>
            <Button onClick={() => console.log("패스할래요")}>
              패스할래요
            </Button>
          </ButtonsWrapper>
        </div>
      </MessageWrapper>
    );
  }
  return <MessageWrapper isbot={isbot}>{text}</MessageWrapper>;
};

export default ChatMessage;
