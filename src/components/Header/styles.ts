import styled from 'styled-components';

interface MenuButtonProps {
  allDepartments?: boolean;
}

export const Container = styled.header`
  height: 112px;
  background-color: var(--blue-500);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: 100px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 0 72px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;

  .logo {
    width: 157.42px;
    height: 53.73px;
    display: flex;
    align-items: center;

    @media (max-width: 950px) {
      display: none;
    }
  }

  .logoMobile {
    width: 45px;
    height: 46px;
    display: none;
    align-items: center;

    @media (max-width: 950px) {
      display: flex;
    }

    @media (max-width: 550px) {
      width: 37px;
      height: 38px;
    }
  }

  @media (max-width: 1300px) {
    padding: 0 36px;
  }

  @media (max-width: 1150px) {
    .menuIcon {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    padding: 0 18px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
  }

  img {
    transition: all 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 560px) {
    .searchButton {
      display: none;
    }
  }
`

export const Address = styled.div`
  display: flex;

  h1 {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: white;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: white;
    margin: 0 4px;
  }

  img {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    max-width: 48vw;
  }

  @media (max-width: 700px) {
    h1, span, .arrowDown {
      display: none;
    }
  }
`

export const Input = styled.input`
  width: 530.12px;
  height: 35.99px;
  background-color: var(--gray-200);
  border: none;
  margin-right: -28px;
  border-radius: 0 0 30px 0;
  padding-left: 12px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: var(--gray-600);

  @media (max-width: 1300px) {
    width: 400px;
  }

  @media (max-width: 950px) {
    width: 48vw;
  }

  @media (max-width: 560px) {
    border-radius: 0;
  }

  @media (max-width: 420px) {
    width: 42vw;
  }

  @media (max-width: 350px) {
    width: 32vw;
  }
  
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-600);

    @media (max-width: 320px) {
      color: transparent;
    }
  }
  :-ms-input-placeholder {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-600);

    @media (max-width: 320px) {
      color: transparent;
    }
  }
`

export const UserWrapper = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-between;

  section {
    margin-right: 8px;

    @media (max-width: 690px) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: white;
      opacity: 0.8;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;

      @media (max-width: 800px) {
        display: none;
      }
    }

    span {
      color: white;
      opacity: 0.8;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (max-width: 800px) {
        flex-direction: column;

        .divider {
          display: none;
        }
      }

      @media (max-width: 560px) {
        span:first-child {
          display: none;
        }

        margin-top: 10px;
      }
    }
  }
`

export const LoginWrapper = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-between;

  div {
    margin-left: 8px;
  }

  h1 {
    font-size: 12px;
    line-height: 18px;
    color: white;
    opacity: 0.8;
    font-weight: 400;

    span {
      font-weight: 700;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  h2 {
    display: none;
    font-size: 12px;
    line-height: 18px;
    color: white;
    opacity: 0.8;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 650px) {
    .userLogo, h1 {
      display: none;
    }

    h2 {
      display: flex;
      margin-top: 10px;
    }
  }
`

export const UserInfo = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 23.75px;

  h4 {
    width: 18px;
    min-width: 18px;
    height: 18px;
    min-height: 18px;
    border-radius: 9px;
    background-color: var(--orange-600);
    color: white;
    margin-left: -8px;
    margin-top: -10px;
    z-index: 1;
    font-weight: 600;
    font-size: 12px;
  }

  @media (max-width: 1150px) {
    .favorites {
      display: none;
    }
  }

  @media (max-width: 800px) {
    .costumerService {
      display: none;
    }
  }
  
  @media (max-width: 500px) {
    .costumerService {
      display: none;
    }
  }

  @media (max-width: 330px) {
    display: none;
  }
`

export const SubMenu = styled.section`
  height: 28px;
  background-color: var(--orange-500);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    height: 100%;
  }
`

export const MenuWrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 0 72px;
  height: 100%;
  align-items: center;
  display: flex;
  overflow-x: auto;

  @media (max-width: 850px) {
    padding: 0;
    flex-direction: column;
  }
`

export const MenuButton = styled.button<MenuButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  width: ${props => props.allDepartments ? '230px' : '210px'};
  height: 100%;
  border-right: 1px solid var(--orange-200);
  background-color: ${props => props.allDepartments ? 'var(--orange-600)' : 'transparent'};

  @media (max-width: 850px) {
    width: 100%;
    border: none;
    border-top: 1px solid var(--orange-200);
    padding: 4px 0;
  }
`