import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
  min-width: 212px;
  background-color: white;
  margin-right: 18px;
  padding-top: 8px;
  border-radius: 0 0 5px 5px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    margin-bottom: 18.4px;
  }
`

export const RatioContent = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  span {
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-600);
    margin-left: 2px;
    margin-top: 3px;
  }
`

export const TextSection = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  span {
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-600);
  }

  h1 {
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 18px;
    color: var(--gray-800);
    font-weight: 700;
  }

  h4 {
    font-size: 12px;
    line-height: 21px;
    color: var(--gray-700);
    font-weight: 400;
    text-decoration-line: line-through;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: var(--orange-500);
  }

  h3 {
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-700);
    font-weight: 400;
  }
`
export const ExtraSection = styled.main`
  display: flex;
  padding: 0 16.5px;
  margin-top: 7px;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  h5 {
    margin-left: 7.79px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: var(--gray-700);
    text-transform: uppercase;
  }
`

export const BlankSpace = styled.div`
  height: 18px;
  margin-top: 7px;
`

export const BuyButton = styled.button`
  width: 100%;
  background-color: var(--orange-500);
  border-radius: 5px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9px;

  h3 {
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    margin-left: 8px;
  }
`