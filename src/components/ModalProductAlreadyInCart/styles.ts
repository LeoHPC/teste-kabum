import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  border-radius: 5px;
  padding: 0 10px;
  padding-bottom: 1px;
  background-image: linear-gradient(to right, var(--orange-500), var(--blue-500) 40%);
  right: 15px;
  top: 20px;
  z-index: 2;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--gray-500);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .ninjaImage {
    display: flex;
  }

  img {
    cursor: default;
  }

  h1 {
    font-size: 22px;
    line-height: 28px;
    margin-right: 20px;
    color: white;
  }

  span {
    color: var(--orange-500);
    font-size: 24px;
    cursor: pointer;
    text-decoration: underline;
    font-style: italic;

    &:hover {
      color: var(--orange-600);
    }
  }

  &::after {
    content: " ";
    position: absolute;
    left: 100%;
    top: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent transparent var(--gray-500);
  }

  @media (max-width: 500px) {
    right: 5px;
    background-image: none;
    background-color: var(--blue-500);
    padding: 10px 40px;

    .ninjaImage {
      display: none;
    }
  }

  @media (max-width: 280px) {
    right: 0;
  }
`