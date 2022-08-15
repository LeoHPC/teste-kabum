import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 140px);
  background-color: var(--blue-800);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 334px;

  @media (max-width: 1380px) {
    padding-bottom: 0;
  }
`

export const BackgroundImage = styled.aside`
  height: 100%;
  width: 100%;
  max-width: 1440px;
`

export const MainContent = styled.main`
  width: 100%;
  max-width: 1360px;
  margin-top: -10vh;
  z-index: 1;

  @media (min-width: 1400px) {
    margin-top: -260px;
  }

  @media (max-width: 1399px) {
    margin-top: -26vh;
  }

  @media (max-width: 1150px) {
    margin-top: -23vh;
  }

  @media (max-width: 1000px) {
    margin-top: -18vh;
  }

  @media (max-width: 700px) {
    margin-top: -12vh;
  }

  @media (max-width: 550px) {
    margin-top: -8vh;
  }
`