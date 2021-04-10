import React from "react";
import renderer from "react-test-renderer";
import Realtor from "./Realtor";

it("renders correctly", () => {
  const tree = renderer.create(<Realtor />).toJSON();
  expect(tree).toMatchSnapshot();
});
