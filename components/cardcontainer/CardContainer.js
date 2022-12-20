// import uuid from "uuid";
import React from "react";
import Card from "../card/Card";

// import { useGetTopChartsQuery } from '../../store/services/shazamCore';

// import { cardData } from "../../constants/cardData";
import Load from "../loader/Load";
// const id = uuid.v4();
const CardContainer = ({ data}) => {
  console.log(data);
  // const {title, subtitle,images}=data
  return (
    <div className="grid grid-cols-2 place-items-center gap-6 px-2 md:grid-cols-3  md:gap-6 lg:grid-cols-4 lg:gap-10">
      {data.map((card) => {
        const { title, subtitle,key } = card;
        return (
            <Card
              key={key}
              title={title}
              subtitle={subtitle}
              coverart={card.images?.coverart}
            />
        );
      })}
    </div>
  );
};

export default CardContainer;
