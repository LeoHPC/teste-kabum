// IMAGES
import Image from "next/image";

// STYLES
import { Container, Text } from "./styles";

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
  imageText: string;
}

export function CardFooter({ title, subTitle, image, imageText }: CardProps) {
  return (
    <Container>
      <Text>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </Text>
      <Image src={image} alt={imageText} objectFit="cover" />
    </Container>
  )
}