import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.containerColor};
  border-radius: 4px;
  max-width: 42rem;
  margin: 2.4rem auto;
`;
