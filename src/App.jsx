import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

import Launch from './components/Launch.js'

const Parent = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Title = styled.div`
  color: #253746;
  font-weight: 600;
  font-size: 60px;
`

const Desc = styled.div`
  color: #253746;
  opacity: 0.5;
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;
`

const LoginParent = styled.div`
  display: flex;
  height: 136px;
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
  height: 56px;
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

const TitleParent = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 390px;
  height: 390px;
`

const Btn = styled.div`
  width: 148px;
  height: 54px;
  background-color: ${props => props.color ? "#253746" : "#E3E6E8"};
  color: ${props => props.color ? "white" : "#253746"};
  transition: 0.2s ease all;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  cursor: pointer;
`

const BtnParent = styled.div`
  display: flex;
  align-items: center;
`

const Signup = styled.div`
  margin-left: 20px;
  color: #253746;
  opacity: 0.5;
  cursor: pointer;
`

const App = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleDragStart = (event) => {
    event.preventDefault()
  }

  const inspectValue = (email, password) => {
    const emailIsValid = emailRegex.test(email);
    const passwordIsValid = password.length >= 8;
    SetInspect(emailIsValid && passwordIsValid);
  } 

  const handleEmailChange = (event) => {
    SetUserId(event.target.value);
    inspectValue(event.target.value, userPw);
  }
  
  const handlePasswordChange = (event) => {
    SetUserPw(event.target.value);
    inspectValue(userId, event.target.value);
  }

  const handleBtnClick = () => {
    if (inspect) {
      console.log("OK")
      //TODO
    }
  }

  const [inspect, SetInspect] = useState(false)
  const [userId, SetUserId] = useState('')
  const [userPw, SetUserPw] = useState('')

  return (
    <>
    <Header/>
      <Parent>
        <Body draggable="true" onDragStart={handleDragStart}>
          <TitleParent>
            <Title>Planner</Title>
            <Desc>갓생 살고 싶은 사람들의 모임, Planner</Desc>
          </TitleParent>
          <LoginParent>
            <LoginChild>
              <Label>이메일</Label>
              <Input value={userId} onChange={handleEmailChange} />
            </LoginChild>
            <LoginChild>
              <Label>비밀번호</Label>
              <Input value={userPw} onChange={handlePasswordChange} type={'password'} />
            </LoginChild>
          </LoginParent>
          <BtnParent>
            <Btn color={inspect} onClick={handleBtnClick}>
              로그인
            </Btn>
            <Signup>
              처음 오셨나요?
            </Signup>
          </BtnParent>
        </Body>
      </Parent>
    </>
  );
}

export default App;
