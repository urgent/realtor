import React from "react";
import Head from "next/head";
import { RealtorTable } from "../components/Realtor";
import { Grid } from "@chakra-ui/react";

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
      <Grid gridRow="body" gridColumn="content" gap={6}>
        <main>
          <RealtorTable realtors={data} />
        </main>
      </Grid>

      <footer></footer>
    </>
  );
}
