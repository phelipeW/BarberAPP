import React from "react";
import { render } from "@testing-library/react-native";

import { Button } from "../../components/atoms";

describe("Atom Button", () => {
  it("Check if atom button renders title correctly", () => {
    const { getByText } = render(<Button title={"Salvar"} />);

    const buttonText = getByText("Salvar");

    expect(buttonText).toBeTruthy();
  });

  it("Check if atom button renders title correctly", () => {
    const { getByTestId } = render(
      <Button testID="custom-button" title={"Salvar"} />
    );

    const buttonText = getByTestId("custom-button");

    expect(buttonText.props.style.opacity).toEqual(1);
  });
});
