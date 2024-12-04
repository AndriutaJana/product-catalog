import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    // Filtrare după categorie
    if (category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category,
      );
    }

    // Sortare după preț
    if (sortOrder === "asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [category, sortOrder, products]);

  return (
    <Box p={6} maxW="7xl" mx="auto">
      {/* Filtrare și sortare */}
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={6}>
        <Menu>
          <MenuButton
            as={Button}
            bg="black"
            color="white"
            size="sm"
            maxW="max-content"
          >
            {category === "all" ? "Select Category" : category}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setCategory("all")}>
              All Categories
            </MenuItem>
            <MenuItem onClick={() => setCategory("men's clothing")}>
              Men's Clothing
            </MenuItem>
            <MenuItem onClick={() => setCategory("women's clothing")}>
              Women's Clothing
            </MenuItem>
            <MenuItem onClick={() => setCategory("jewelery")}>Jewelry</MenuItem>
            <MenuItem onClick={() => setCategory("electronics")}>
              Electronics
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            bg="black"
            color="white"
            size="sm"
            maxW="max-content"
          >
            {sortOrder === "none"
              ? "Sort by Price"
              : sortOrder === "asc"
                ? "Price: Low to High"
                : "Price: High to Low"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setSortOrder("none")}>
              Sort by Price
            </MenuItem>
            <MenuItem onClick={() => setSortOrder("asc")}>
              Price: Low to High
            </MenuItem>
            <MenuItem onClick={() => setSortOrder("desc")}>
              Price: High to Low
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Carduri Produse */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
