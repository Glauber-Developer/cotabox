import { render, screen } from '@testing-library/react'
import { Summary } from '.'

describe("Summary Component", () => {
  test("deve encontrar um titulo", () => {
    render(<Summary/>);
    const tittle = screen.queryByText("DATA");

    //expect(tittle).toBeInTheDocument();
  });
});