import React from "react";

interface CarouselItemProps {
  imgUrl: string;
  imgTitle: string;
  bgColor: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  imgUrl,
  imgTitle,
  bgColor,
}) => {
  return (
    <div className={`carousel-card flex items-start ${bgColor}`}>
      <img
        src={imgUrl}
        alt={imgTitle}
        className="h-full rounded-tl-2xl rounded-bl-2xl"
      />
      <div className="flex flex-col justify-around items-end px-4 py-2 h-full w-full">
        <h3 className="text-white font-bold text-xl">{imgTitle}</h3>
        <a href="#" className="text-white underline">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
