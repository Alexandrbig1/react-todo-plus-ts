import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  max-width: 40rem;
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const Input = styled.input`
  display: block;

  padding: 8px 12px 8px 12px;
  width: 22rem;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: text cursor;
  color: ${(p) => p.theme.colors.textColor};
  background-color: ${(p) => p.theme.colors.inputBg};
  font-size: 1.4rem;

  &:hover {
    outline: solid 1px ${(p) => p.theme.colors.inputHover};
  }

  &:focus-within {
    outline: 1px solid rgba(143, 152, 212, 0.658);
    box-shadow: 0 2px 5px 1px ${(p) => p.theme.colors.inputHover};
  }

  &::placeholder {
    overflow: hidden;
    color: #777;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 8px 20px;
  border-radius: 24px;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.contactBtn};
  transition: 0.3s;
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: ${(p) => p.theme.colors.contactHoverBtn};
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  max-width: 40rem;
  width: 90%;
  padding: 2rem 0;
`;
