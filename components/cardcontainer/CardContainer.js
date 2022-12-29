import React from "react";
import Card from "../card/Card";
import Load from "../loader/Load";

const CardContainer = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.map((card) => {
        const { title, subtitle, key } = card;
        let id = crypto.randomUUID();
        return (
          // <>
          <Card
            // onClick={() => check()}
            key={id}
            title={title}
            subtitle={subtitle}
            coverart={card.images?.coverart}
          />
        );
      })}
    </div>
  );
};
const styles = {
  wrapper: `grid grid-cols-2 place-items-center gap-6 px-2 md:grid-cols-3  md:gap-6 lg:grid-cols-4 lg:gap-10`,
};

export default CardContainer;
