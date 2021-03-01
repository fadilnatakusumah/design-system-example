import styled from "styled-components"

import Styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations } from "../assets";
import { PrimaryButton } from "./Button";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  /* background-color: ${props => props.theme} */
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;

  >img{
    height: 300px;
  }
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`
const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: none;
  border: none;
  
  >span{
    font-size: ${typeScale.header2};
    display: inline-block;
    width: 100%;
    heigth: 100%;
  }
`

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <CloseButton>
        <span>&#10005;</span>
      </CloseButton>
      <img src={Illustrations.Signup} alt="Sign up for an account" aria-hidden="true" />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up today to get access!</SignUpText>
      <PrimaryButton>Sign up!</PrimaryButton>
    </ModalWrapper>
  )
}