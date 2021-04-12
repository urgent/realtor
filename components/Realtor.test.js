import React from "react";
import renderer from "react-test-renderer";
import { Realtor, RealtorTable } from "./Realtor";

const data = [
  {
    name: "Georgeanna Newmones",
    address:
      "Executive Realtors\r\n3817 Ventnor Ave\r\nAtlantic City, NJ 8401\r\nOffice - 609-645-0303",
    image: "/bio/Georgeanna-Newmones.jpg",
  },
];

it("renders correctly", () => {
  const realtor = renderer.create(<Realtor {...data[0]} />).toJSON();
  expect(realtor).toMatchSnapshot();
  const table = renderer.create(<RealtorTable realtors={data} />).toJSON();
  expect(table).toMatchSnapshot();
});
