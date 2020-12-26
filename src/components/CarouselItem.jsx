import React from'react';
import '../assets/styles/components/CarouselItem.scss'
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({data}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={data.cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title">{data.title}</p>
          <p className="carousel-item__details--subtitle">{`${data.year} | ${data.duration}`}</p>
        </div>
      </div>
);
export default CarouselItem;
