import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.500" color="white" py={4}>
      <Center>
        <Text fontSize="sm" textAlign="center">
          &copy; 2024 Product Catalog. All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
