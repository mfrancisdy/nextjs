import React from "react";
import "./carousel.css";
import { cardDetails } from "./data";
import CarouselItem from "./item";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => (
          <CarouselItem
            key={detailKey}
            imgUrl={cardDetails[detailKey].imgUrl}
            imgTitle={cardDetails[detailKey].title}
            bgColor={cardDetails[detailKey].bgColor}
          />
        ))}
        {Object.keys(cardDetails).map((detailKey) => (
          <CarouselItem
            key={detailKey}
            imgUrl={cardDetails[detailKey].imgUrl}
            imgTitle={cardDetails[detailKey].title}
            bgColor={cardDetails[detailKey].bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
