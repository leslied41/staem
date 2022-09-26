import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useData, useBreakPoints } from "../../hooks";
import "@splidejs/react-splide/css";

const Carousel = () => {
  const { data, isLoading } = useData();
  const { isMobile } = useBreakPoints();
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        rewind: true,
        gap: "1rem",
        perMove: 1,
        perPage: 1,
        drag: isMobile ? true : false,
        focus: "center",
        isNavigation: "true",
        classes: {
          arrow: "hidden",
          pagination: "custom-pagination",
        },
      }}
    >
      {data?.body.map((game) => {
        const { id, link, image, price, title, genre, tags } = game;
        return (
          <SplideSlide key={id}>
            <img src={image} alt={title} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Carousel;
