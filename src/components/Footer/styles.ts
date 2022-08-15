import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  padding: 32px 62px 72px 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 930px) {
    flex-direction: column;
    padding: 32px 0 72px 0;
    gap: 40px;
  }
`