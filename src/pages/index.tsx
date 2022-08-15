// NEXT
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image';

// REACT
import { useEffect } from 'react';

// COMPONENTS
import { Footer } from '../components/Footer';
import { ModalProductAlreadyInCart } from '../components/ModalProductAlreadyInCart';
import { Products } from '../components/Products';
import { PromoBanner } from '../components/PromoBanner';

// HOOKS
import { useCart } from '../hooks/cart';

// IMAGES 
import Background from "../../public/images/background.png";

// INTERFACES
import { AllProducts, IProduct } from '../interfaces/product';

// SERVICES
import api from '../services/api';

import { BackgroundImage, Container, MainContent } from '../styles/home';

export default function Home({ products }: AllProducts) {
  const { isProductAlreadyInCart, setIsProductAlreadyInCart } = useCart();

  useEffect(() => {
    if (isProductAlreadyInCart) {
      setTimeout(() => {
        setIsProductAlreadyInCart(false);
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductAlreadyInCart]);

  return (
    <div>
      <Head>
        <title>KaBum! | Maior E-commerce de Tecnologia e Games da América Latina</title>
        <meta name="description" content="Created by @LeoHPC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>

        <ModalProductAlreadyInCart isInCart={isProductAlreadyInCart} />

        <BackgroundImage>
          <Image src={Background} alt="Imagem de fundo sobre promoções quinzenais" objectFit='cover' priority />
        </BackgroundImage>

        <MainContent>
          <PromoBanner />
          <Products products={products} />
          <Footer />
        </MainContent>
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  var products: IProduct[] = [];

  try {
    const response = await api.get<IProduct[]>('/products');

    if (response) {
      products = response.data;
    }
  } catch (error) {
    console.log('Ops, ocorreu um erro! Por favor, tente novamente.');
  }

  return {
    props: { products },
    revalidate: 60 * 60 // one hour
  }
}
