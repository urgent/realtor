import React from "react";
import Head from "next/head";
import Realtor from "../components/Realtor";

export default function Home() {
  return (
    <>
      <Head>
        <title>NJ Realtor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Realtor />
      </main>

      <footer></footer>
    </>
  );
}
