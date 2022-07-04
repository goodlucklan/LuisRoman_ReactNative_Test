import React from "react";
import ScreenTemplate from "./ScreenTemplate";

describe("ScreenTemplate Component", () => {
  test("Render a global Component", () => {
    expect(<ScreenTemplate />).toMatchSnapshot();
  });
});
