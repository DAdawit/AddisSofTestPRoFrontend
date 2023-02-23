import styled from "styled-components";

export const Form_Container = styled.div`
  margin: 10px;
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  /* padding: 50px; */
  border: 2px solid #1d1d53;
  border-radius: 25px;

  @media (min-width: 700px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  border: 2px solid #1d1d53;
  border-radius: 15px;
  padding-left: 5px;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  &:active {
    border: 2px solid #2e2edaaa;
  }
`;

export const Validation_Text = styled.small`
  font-family: "Nunito", sans-serif;
  color: red;
`;

export const Form_Label = styled.label`
  padding-left: 5px;
  font-weight: bold;
`;

export const Form_Control = styled.div`
  margin-bottom: 10px;
`;

export const Form_Heading = styled.h2`
  text-align: center;
  font-family: "Nunito", sans-serif;
  margin-bottom: 10px;
  color: black;
`;
