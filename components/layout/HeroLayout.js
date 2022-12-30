import React, { useContext, useEffect, useState } from "react";
import Load from "../loader/Load";
import NotFound from "../../pages/_error";
import GenreTags from "../hero/GenreTags";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";

const HeroLayout = ({ error, title, children }) => {
  const router = useRouter();
  const { showGenre, hideGenreTags } = useContext(AppContext);
  if (error) return <NotFound />;
  return (
    <div className="">
      <header className={styles.wrapper}>
        <div className="flex justify-between">
          <h2 className={`capitalize`}>{title}</h2>
          <button
            className={`mx-6 rounded-md border p-1 text-lg ${
              router.pathname === "/" ? "" : "hidden"
            }`}
            onClick={hideGenreTags}
          >
            {showGenre ? "Show Genres" : "Hide Genres"}
          </button>
          <GenreTags show={showGenre} />
        </div>
      </header>
      <section className="w-full px-2">
        <div className="grid grid-cols-2 place-items-center gap-6 px-2 md:grid-cols-3  md:gap-6 lg:grid-cols-4 lg:gap-10">
          {children}
        </div>
        {/* {isFetching ? <Load /> : <CardContainer data={discover} />} */}
      </section>
    </div>
  );
};

const styles = {
  wrapper: `flex sticky flex-col top-0 bg-black z-10 justify-between bg-[#4A0D67] p-2 px-4 text-xl font-semibold`,
};
export default HeroLayout;
