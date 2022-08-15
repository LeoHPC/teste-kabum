// COMPONENTS
import { CardFooter } from "../FooterCard";

// IMAGES
import Notebook from "../../../public/images/genji.svg";
import Ninja from "../../../public/images/ninja.svg";
import Processor from "../../../public/images/processors.svg";

// STYLES
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <CardFooter
        title="VENDA O SEU PRODUTO"
        subTitle="Venda o seu produto usado em nosso marketplace."
        image={Processor}
        imageText="Imagem de dois processadores Intel Core I7"
      />
      <CardFooter
        title="CONHEÇA OS PRODUTOS PRIME"
        subTitle="Fique por dentro de todos os nossoa benefícios."
        image={Ninja}
        imageText="Imagem de um ninja"
      />
      <CardFooter
        title="CONHEÇA NOSSOS PRODUTOS DE LEILÃO"
        subTitle="As melhores oportunidades de compra."
        image={Notebook}
        imageText="Imagem de dois notebooks"
      />
    </Container>
  )
}