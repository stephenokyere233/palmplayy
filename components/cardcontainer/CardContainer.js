import React from 'react'
import Card from "../card/Card";

import { cardData } from "../../constants/cardData";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-4 p-2 md:grid-cols-3  md:gap-6 lg:grid-cols-4 lg:gap-10">
      {cardData.map((card) => {
        return <Card key={card.id} title={card.title} desc={card.desc} />;
      })}
    </div>
  );
}

export default CardContainer
