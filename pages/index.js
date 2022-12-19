import Head from "next/head";
import React from "react";
import Hero from "../components/hero/Hero";
import Load from "../components/loader/Load";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Load/> */}
      
    </div>
  );
}
