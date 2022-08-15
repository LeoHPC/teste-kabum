// NEXT
import Image from "next/image";

// IMAGES
import Ninja from "../../../public/images/ninja_FAQ.png";

// STYLES
import { Container } from "./styles";

interface ModalProps {
  isInCart: boolean;
}

export function ModalProductAlreadyInCart({ isInCart }: ModalProps) {
  return (
    isInCart ? (
      <Container>
        <div className="ninjaImage">
          <Image
            src={Ninja}
            alt="Imagem de um ninja de braços cruzados"
            height={200}
            width={220}
          />
        </div>
        <h1>Não esquenta! <br /> Este produto já <br /> está no seu <br /> <span>carrinho!</span></h1>
      </Container>
    ) : (
      null
    )
  )
}