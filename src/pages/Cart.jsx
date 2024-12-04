import React from "react";
import { useCart } from "../context/CartContext";
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  Flex,
  Divider,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Box p={6} maxW="4xl" mx="auto">
      {/* Titlu */}
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Shopping Cart
      </Text>

      {/* Listă produse */}
      <List spacing={4}>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <Flex justify="space-between" align="center">
              <Text fontSize="lg">{item.title}</Text>
              <Button
                colorScheme="red"
                variant="ghost"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Flex>
            <Divider my={2} />
          </ListItem>
        ))}
      </List>

      {/* Total și buton Clear Cart */}
      <Box mt={6}>
        <Text fontWeight="semibold" fontSize="xl">
          Total: ${total}
        </Text>
        <Button
          mt={4}
          colorScheme="red"
          onClick={clearCart}
          w="full"
          size="lg"
          _hover={{ bg: "red.600" }}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
