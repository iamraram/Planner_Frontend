import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../index.css';

const Parent = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: slide-in 0.3s ease-in-out;
  
  @keyframes slide-in {
    from {
      transform: translateX(5%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 450px;
`

const Header = styled.div`
  display: block;
  height: 40px;
  width: 100%;
  -webkit-app-region: drag;

  * {
    -webkit-app-region: drag;
  }
  
  .btn{
    -webkit-app-region: no-drag
  }
`

const LoginParent = styled.div`
  display: flex;
  height: 120px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const LoginChild = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const Label = styled.div`
  color: #253746;
  font-weight: 500;
  margin-right: 20px;
  font-size: 18px;
`

const Input = styled.input`
  width: 300px;
  height: 52px;
  box-sizing: border-box;
  font-size: 17px;
  border: 1px solid #E3E6E8;
  border-radius: 12px;
  padding: 10px;
  padding-left: 14px;
  color: #253746;
  letter-spacing: ${props => props.type === 'password' ? "0.2em" : "0.01em"};
  
  :focus, :active {
    outline: none;
  }

`

const BackBtn = styled.div`
  color: #253746;
  opacity: 0.5;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const MainParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
`

const BackTxt = styled.div`
  color: #253746;
  opacity: 0.8;
  font-size: 20px;
  margin-left: 20px;
  font-weight: 500;
`

const Title = styled.div`
  color: #253746;
  font-weight: 600;
  font-size: 30px;
  line-height: 150%;
`

const Desc = styled.div`
  font-size: 18px;
  color: #253746;
  opacity: 0.5;
`
const Btn = styled.div`
  width: 136px;
  height: 52px;
  background-color: ${props => props.color ? "#253746" : "#E3E6E8"};
  color: ${props => props.color ? "white" : "#253746"};
  transition: 0.2s ease all;
  border-radius: 18px;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  cursor: pointer;
`

const BtnParent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`

const Launch = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleDragStart = (event) => {
    event.preventDefault()
  }

  const inspectValue = (name, email) => {
    const emailIsValid = emailRegex.test(email);
    const nameIsValid = name.length >= 2;
    SetInspect(emailIsValid && nameIsValid);
  } 

  const handleNameChange = (event) => {
    SetUserName(event.target.value);
    inspectValue(event.target.value, userId);
  }

  const handleEmailChange = (event) => {
    SetUserId(event.target.value);
    inspectValue(userName, event.target.value);
  }

  const handleBtnClick = () => {
    if (inspect) {
      console.log("OK")
    }
  }

  const [inspect, SetInspect] = useState(false)
  const [userName, SetUserName] = useState('')
  const [userId, SetUserId] = useState('')

  return (
    <>
      <Header/>
      <Parent>
        <Body draggable="true" onDragStart={handleDragStart}>
          <BackBtn>
            <Link to="/">&lt;</Link>
            <BackTxt>로그인</BackTxt>
          </BackBtn>
          <MainParent>
            <Title>안녕하세요!<br/>Planner에 오신 것을 환영합니다.</Title>
            <Desc>빠르게 가입하고 Planner를 이용해보세요.</Desc>
          </MainParent>
          <LoginParent>
            <LoginChild>
              <Label>이름</Label>
              <Input value={userName} onChange={handleNameChange} />
            </LoginChild>
            <LoginChild>
              <Label>이메일</Label>
              <Input value={userId} onChange={handleEmailChange} />
            </LoginChild>
          </LoginParent>
          <BtnParent>
            <Btn color={inspect} onClick={handleBtnClick}>
              다음
            </Btn>
          </BtnParent>
        </Body>
      </Parent>
    </>
  );
}

export default Launch;
