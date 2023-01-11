import React from "react";

const Category = ({ children, name }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.childContainer}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  wrapper: "flex flex-col overflow-hidden py-2 ",
  title: "font-medium px-6 py-2 text-2xl capitalize",
  childContainer: "overflow-y-hidden overflow-x-scroll scrollbar-hide",
};

export default Category;
