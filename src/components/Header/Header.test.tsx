
import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe("Header Component", () => {
  it("deve encontrar um button", () => {
    render(<Header/>);
    const btn = screen.getByRole("button");

    //expect(btn).toBeInTheDocument();
  });
});
