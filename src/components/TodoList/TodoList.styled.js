import styled from "styled-components";
import { MdOutlineDoneOutline } from "react-icons/md";

export const Menu = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;
`;

export const Items = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.inputBg};
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const DeleteBtn = styled(MdOutlineDoneOutline)`
  width: 20px;
  height: 20px;
  transition: 0.3s;
  cursor: pointer;

  color: ${(p) => p.theme.colors.deleteBtn};
  &:hover {
    color: #69db7c;
  }
`;
