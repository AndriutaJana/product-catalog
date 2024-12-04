import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer.jsx";

describe("Footer", () => {
  it("renders the footer content correctly", () => {
    render(
      <ChakraProvider>
        <Footer />
      </ChakraProvider>,
    );

    expect(
      screen.getByText("© 2024 Product Catalog. All Rights Reserved."),
    ).toBeInTheDocument();
  });
});
