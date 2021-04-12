import React from "react";
import Head from "next/head";
import { RealtorTable } from "../components/Realtor";

const data = [
  {
    name: "Georgeanna Newmones",
    address:
      "Executive Realtors\r\n3817 Ventnor Ave\r\nAtlantic City, NJ 8401\r\nOffice - 609-645-0303",
    image: "/bio/Georgeanna-Newmones.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NJ Realtor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RealtorTable realtors={data} />
      </main>

      <footer></footer>
    </>
  );
}
