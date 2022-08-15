// NEXT
import Image from "next/image";

// REACT
import { useState } from "react";

// IMAGES
import FilledStar from "../../../public/icons/filled_star.svg";
import FreeShipping from "../../../public/icons/free_shipping.svg";
import Heart from "../../../public/icons/heart.svg";
import OpenBox from "../../../public/icons/open_box.svg";
import FilledHeart from "../../../public/icons/orange_heart.svg";
import Star from "../../../public/icons/star.svg";
import Cart from "../../../public/icons/white_cart.svg";

// HOOKS
import { useCart } from "../../hooks/cart";

// INTERFACES
import { IProduct } from "../../interfaces/product";

// STYLES
import {
  BlankSpace,
  BuyButton,
  Container,
  ExtraSection,
  RatioContent,
  TextSection
} from "./styles";

interface CardProps {
  product: IProduct;
}

export function CardProduct({ product }: CardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const { addProductToCart } = useCart();

  return (
    <Container>

      <section>
        {isLiked ? (
          <Image
            onClick={() => setIsLiked(!isLiked)}
            style={{ cursor: 'pointer' }}
            src={FilledHeart}
            alt="Ícone de um coração colorido"
            width={24}
            height={21.6}
            tabIndex={0}
          />
        ) : (
          <Image
            onClick={() => setIsLiked(!isLiked)}
            style={{ cursor: 'pointer' }}
            src={Heart}
            alt="Ícone de um coração sem cor de fundo"
            width={24}
            height={21.6}
            tabIndex={0}
          />
        )}
        <RatioContent>
          <Image src={FilledStar} alt="Ícone de uma estrela completa" width={14} height={13} />
          <Image src={FilledStar} alt="Ícone de uma estrela completa" width={14} height={13} />
          <Image src={FilledStar} alt="Ícone de uma estrela completa" width={14} height={13} />
          <Image src={FilledStar} alt="Ícone de uma estrela completa" width={14} height={13} />
          <Image src={Star} alt="Ícone de uma estrela incompleta" width={14} height={13} />
          <span> {product.ratio} </span>
        </RatioContent>
      </section>
      <Image src={product.image} alt={product.title} width={212} height={106} objectFit="cover" />
      <TextSection>
        <span> {product.manufacturer} </span>
        <h1> {product.title} </h1>
        <h4>R$ {product.initialPrice.toFixed(2).replace(".", ",")} </h4>
        <h2>R$ {product.discountPrice.toFixed(2).replace(".", ",")} </h2>
        <h3>À VISTA</h3>
      </TextSection>
      {product.freeShipping && product.openBox ? (
        <ExtraSection>
          <div>
            <Image src={FreeShipping} alt="Ícone de um caminhão" width={11.72} height={8} />
            <h5>frete grátis</h5>
          </div>
          <div>
            <Image src={OpenBox} alt="Ícone de uma caixa aberta" width={11.3} height={8} />
            <h5>open box</h5>
          </div>
        </ExtraSection>
      ) : (
        <BlankSpace />
      )}
      <BuyButton tabIndex={0} onClick={() => addProductToCart(product)} >
        <Image src={Cart} alt="Ícone de um carrinho de compras" width={20} height={20} />
        <h3>comprar</h3>
      </BuyButton>
    </Container>
  )
}