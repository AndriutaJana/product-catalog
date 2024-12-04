import { render, screen } from "@testing-library/react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

describe("Header", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Router>
          <Header />
        </Router>
      </ChakraProvider>,
    );
  });

  it("should render the title Product Catalog", () => {
    //the title is present in the document
    expect(screen.getByText("Product Catalog")).toBeInTheDocument();
  });

  it("should render navigation links Home and Cart", () => {
    //home and cart links are present
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("should render the Home link with the correct text", () => {
    //the home link is present and contains the correct text
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveTextContent("Home");
  });

  it("should render the Cart link with the correct text", () => {
    // the cart link is present and contains the correct text
    const cartLink = screen.getByRole("link", { name: /cart/i });
    expect(cartLink).toHaveTextContent("Cart");
  });
});
