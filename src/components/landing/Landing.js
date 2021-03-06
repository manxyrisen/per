import React from "react";
import styled from "styled-components";
import logo from "../../logo.png";

function Login(props) {
  return (
    <LandingPage>
      <img src={logo} alt="null" />
      <a href={process.env.REACT_APP_LOGIN}>
        <button className="Button"> Login </button>
      </a>
    </LandingPage>
  );
}
export default Login;
const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-evenly;
  background-color: lightblue;

  & img {
    height: auto;
    max-width: 30vw;
  }

  & .Button {
    border: none;
    border-radius: 20px;
    background-color: #8bfbf9;
    display: block;
    align-self: center;
    font-size: 20px;
    box-shadow: 0 12px 16px 0 black;
    padding: 1vh 2vw;
    :hover {
      box-shadow: none;
    }
    :active {
      box-shadow: none;
    }
  }

  & a {
    text-decoration: none;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  & img {
    max-width: 60vw;
    height: auto;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  & .Button {
    border: none;
    border-radius: 30px;
    background-color: #8bfbf9;
    display: block;
    align-self: center;
    font-size: 50px;
    box-shadow: 0 12px 16px 0 black;
  }
`;
