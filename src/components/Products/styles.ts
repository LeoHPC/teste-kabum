import styled from "styled-components";
import { Swiper as SwiperCarousel } from 'swiper/react';

export const Container = styled.section`
  background-color: var(--gray-50);
  padding: 34px 20px;
  justify-content: space-between;
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    padding: 34px 18px;
  }
`

export const Swiper = styled(SwiperCarousel)`
  width: 100%;
  padding-left: 38px;

  @media (max-width: 1320px) and (min-width: 1270px) {
    padding-left: 30px;
  }

  @media (max-width: 1000px) and (min-width: 970px) {
    padding-left: 30px;
  }

  @media (max-width: 618px) and (min-width: 590px) {
    padding-left: 30px;
  }

  @media (max-width: 590px) {
    padding-left: 0;
  }

  .swiper-button-next {
    background-image: url('/icons/right_arrow.svg');
    background-repeat: no-repeat;
    width: 25px;
    margin-right: -10px;

    @media (max-width: 594px) {
      display: none;
    }
  }

  .swiper-button-prev {
    background-image: url('/icons/left_arrow.svg');
    background-repeat: no-repeat;
    width: 25px;
    margin-left: -10px;

    @media (max-width: 594px) {
      display: none;
    }
  }

  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination-bullets {
    display: none;
  }
`;