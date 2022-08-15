// NEXT
import Image from "next/image";

// IMAGES
import ArrowDown from "../../../public/icons/arrow_down.svg";
import Costumer from "../../../public/icons/costumer.svg";
import Cart from "../../../public/icons/gray_cart.svg";
import Favorites from "../../../public/icons/gray_heart.svg";
import LogoMobile from "../../../public/icons/logo_mobile.svg";
import MenuIcon from "../../../public/icons/menu.svg";
import ButtonSearch from "../../../public/icons/search_arrow.svg";
import User from "../../../public/icons/user.svg"
import Logo from "../../../public/images/logo.svg";
import UserImage from "../../../public/images/user.svg";

// HOOKS
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

// STYLES
import {
  Address,
  Container,
  IconsWrapper,
  Input,
  InputWrapper,
  LoginWrapper,
  MenuButton,
  MenuWrapper,
  SubMenu,
  UserInfo,
  UserWrapper,
  Wrapper
}
  from "./styles";

export function Header() {
  const { user, signIn, signOut } = useAuth();
  const { cart } = useCart();

  return (
    <>
      <Container>
        <Wrapper>
          {
            user && (
              <div className="menuIcon">
                <Image
                  aria-label="Menu"
                  title="Menu"
                  src={MenuIcon}
                  alt="Ícone simbolizando um botão de menu"
                  width={28.5}
                  height={19}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            )
          }
          <div className="logo">
            <Image
              aria-label="Logo"
              title="Logo"
              src={Logo}
              alt="Logo da empresa KaBum"
              objectFit="cover"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="logoMobile">
            <Image
              aria-label="Logo"
              title="Logo"
              src={LogoMobile}
              alt="Logo da empresa KaBum"
              objectFit="cover"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <InputWrapper>
            <div>
              <Input placeholder="BUSQUE AQUI" />
              <div className="searchButton">
                <Image
                  aria-label="Ícone de pesquisa"
                  title="Pesquisar"
                  src={ButtonSearch}
                  alt="Ícone de pesquisa com duas setas apontadas para direita"
                  width={75}
                  height={50}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            {user && (
              <Address>
                <h1>Enviar para:</h1>
                <span>Rua das Hortências, 295 - Boa Vista - Limeira SP</span>
                <div className="arrowDown">
                  <Image
                    aria-label="Mais informações sobre o endereço"
                    title="Mais informações"
                    src={ArrowDown}
                    alt="Ícone de uma seta para baixo"
                    width={12}
                    height={7}
                  />
                </div>
              </Address>
            )}
          </InputWrapper>

          {user ? (
            <UserWrapper>
              <section>
                <Image
                  src={UserImage}
                  alt="Foto de um homem loiro, de óculos e mexendo no celular"
                  width={34}
                  height={34}
                />
              </section>
              <div>
                <h1>Olá, Luis Henrique</h1>
                <div>
                  <UserInfo>MINHA CONTA</UserInfo>
                  <span className="divider" style={{ margin: '0 8px' }}>|</span>
                  <UserInfo onClick={signOut}>SAIR</UserInfo>
                </div>
              </div>
            </UserWrapper>
          ) : (
            <LoginWrapper>
              <div className="userLogo">
                <Image
                  src={User}
                  alt="Foto de um avatar em branco"
                  width={36}
                  height={36}
                />
              </div>
              <div>
                <h1>Faça <span onClick={signIn}>Login</span> ou</h1>
                <h1>crie seu <span>Cadastro</span></h1>
              </div>
              <h2 onClick={signIn}>Login</h2>
            </LoginWrapper>
          )}

          <IconsWrapper user={user ? true : false}>
            {user && (
              <button className="costumerService">
                <Image
                  aria-label="SAC"
                  title="SAC"
                  src={Costumer}
                  alt="Ícone de uma pessoa com headset"
                  style={{ opacity: "0.8" }}
                  width={24}
                  height={24}
                />
              </button>
            )}
            <button className="favorites">
              <Image
                aria-label="Favoritos"
                title="Favoritos"
                src={Favorites}
                alt="Ícone de um coração"
                width={24}
                height={24}
              />
            </button>
            <button className="cart">
              <Image
                aria-label="Carrinho"
                title="Carrinho"
                src={Cart}
                alt="Ícone de um carrinho de compras"
                width={24}
                height={24}
              />
              {cart && cart.length > 0 && (
                <h4>{cart.length}</h4>
              )}
            </button>
          </IconsWrapper>
        </Wrapper>

      </Container>
      <SubMenu>
        <MenuWrapper>
          <MenuButton allDepartments={true}>
            TODOS OS DEPARTAMENTOS
            <div style={{ marginLeft: '18px' }}>
              <Image
                src={ArrowDown}
                alt="Ícone de uma seta para baixo"
                width={13}
                height={7.68}
              />
            </div>
          </MenuButton>
          <MenuButton>SEJA PRIME</MenuButton>
          <MenuButton>CENTRAL DE ATENDIMENTO</MenuButton>
        </MenuWrapper>
      </SubMenu>
    </>
  )
}