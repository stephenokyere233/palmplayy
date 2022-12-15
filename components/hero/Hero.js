import React from "react";
import { useSession } from "next-auth/react";
import Dropdown from "../dropdown/Dropdown";

const Hero = () => {
  const { data: session } = useSession();
  let username = "";
  if (session) {
    const { user } = session;
    if (user) {
      const { name } = user;
      username = name;
      console.log(name);
    }
    console.log(user);
  } else {
    console.log(session);
  }
  console.log(username);
  const date = new Date();
  const hours = date.getHours();
  let welcomeText;
  if (hours < 12) {
    welcomeText = `good morning`;
  } else if (hours >= 12 && hours <= 16) {
    welcomeText = "good afternoon";
  } else if (hours > 16) {
    welcomeText = "good evening";
  }

  return (
    <div className="">
      <header className="flex justify-between p-2 text-xl font-semibold">
        {session ? (
          <h2 className={`capitalize`}>{`${welcomeText} , ${username}!`}</h2>
        ) : (
          <h2 className="">Welcome, hope you have a good time 😉</h2>
        )}
        <Dropdown/>
      </header>
      <section className="px-2">
      
      </section>
    </div>
  );
};

export default Hero;
