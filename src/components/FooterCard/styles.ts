import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 384px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1350px) {
    max-width: 300px;
  }

  @media (max-width: 1080px) {
    max-width: 250px;
  }

  @media (max-width: 930px) {
    max-width: 60vw;
  }

  @media (max-width: 550px) {
    max-width: 90vw;
  }
`

export const Text = styled.div`
  padding: 16px;
  border: 0.663366px solid var(--gray-100);

  h1 {
    color: var(--gray-700);
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }

  span {
    color: var(--gray-700);
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
  }
`