import React from "react";
import { Box, Image, Text, Button, Badge } from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="4"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.05)",
        transition: "0.3s ease",
      }}
      className="transition-all duration-300 ease-in-out"
    >
      <Image
        src={product.image}
        alt={product.title}
        objectFit="cover"
        w="full"
        h={{ base: "200px", sm: "250px", md: "300px" }}
        mb="4"
      />
      <Text fontSize="xl" fontWeight="bold" noOfLines={1}>
        {product.title}
      </Text>
      <Text fontSize="md" color="gray.500" noOfLines={2} mb="2">
        {product.description}
      </Text>
      <Badge colorScheme="gray" mt="2" mb="2">
        {product.category}
      </Badge>
      <Text fontSize="lg" fontWeight="semibold" mt="2" color="black">
        ${product.price.toFixed(2)}
      </Text>
      <Button
        mt="4"
        bg="black"
        color="white"
        size="sm"
        onClick={handleAddToCart}
        _hover={{ bg: "gray.800" }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
