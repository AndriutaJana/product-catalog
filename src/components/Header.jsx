import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Link as ChakraLink } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="gray.500" color="white" py={4}>
      <Flex maxW="7xl" mx="auto" px={4} justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Product Catalog
        </Text>

        {/* Navigare */}
        <Spacer />
        <Flex as="nav" gap={6}>
          <ChakraLink as={Link} to="/" _hover={{ color: "black" }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/cart" _hover={{ color: "black" }}>
            Cart
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
