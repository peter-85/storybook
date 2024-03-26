import { render } from "@testing-library/react";
import { Button } from "../Button";

test("should match the snapshot", () => {
  const { asFragment } = render(<Button label='Button' />);

  expect(asFragment()).toMatchSnapshot();
});
