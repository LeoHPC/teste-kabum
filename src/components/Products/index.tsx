// SWIPER
import { Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

// COMPONENTS
import { CardProduct } from '../ProductCard';

// INTERFACES
import { AllProducts } from "../../interfaces/product";

// UTILS
import { swiperBreakpoints } from '../../utils/swiperBreakpoints';

// STYLES
import { Container, Swiper } from "./styles";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Products({ products }: AllProducts) {
  return (
    <Container>
      <Swiper
        slidesPerView={"auto"}
        modules={[Navigation]}
        breakpoints={swiperBreakpoints}
        className="mySwiper"
        loop={true}
        navigation
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <CardProduct product={product} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}