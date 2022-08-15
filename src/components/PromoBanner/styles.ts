import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: var(--orange-500);
  height: 68px;
  padding: 0 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: white;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 8px;
      margin-top: 4px;
    }
  }

  span {
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
    margin-right: 8px;
    margin-top: 4px;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 20px;
      line-height: 28px;
    }

    span {
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (max-width: 750px) {
    padding: 0 36px;

    h1 {
      font-size: 20px;
      line-height: 28px;
    }

    span {
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 18px;

    h1 {
      font-size: 16px;
      line-height: 24px;
    }

    span {
      font-size: 10px;
      line-height: 18px;
    }
  }

  @media (max-width: 450px) {
    span {
      display: none;
    }

    h1 {
      margin-top: 8px;
    }
  }
`