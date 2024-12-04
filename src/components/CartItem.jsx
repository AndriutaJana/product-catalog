import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";

const CartItem = ({ item, onRemove }) => {
  return (
    <Box borderBottom="1px" borderColor="gray.300" py={4} mb={2}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
      >
        {/* Detalii produs */}
        <Box>
          <Text fontWeight="semibold">{item.title}</Text>
          <Text>${item.price.toFixed(2)}</Text>
        </Box>

        {/* Butonul de ștergere */}
        <Button
          colorScheme="red"
          variant="link"
          onClick={() => onRemove(item.id)}
          _hover={{ textDecoration: "underline" }}
          mt={{ base: 2, sm: 0 }}
        >
          Remove
        </Button>
      </Flex>
    </Box>
  );
};

export default CartItem;
