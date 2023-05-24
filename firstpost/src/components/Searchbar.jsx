import React from "react";
import {
  Box,
  Slide,
  Button,
  ChakraProvider,
  useDisclosure,
} from "@chakra-ui/react";

export const Searchbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <ChakraProvider>
        <Button style={{ background: "none" }} onClick={onToggle}>
          <span
            style={{
              color: "grey",
              fontSize: "20px",
              marginTop: "7px",
              marginLeft: "-90px",
            }}
          >
            <i class="fas fa-search"></i>
          </span>
        </Button>
        <Slide
          direction="top"
          in={isOpen}
          style={{ zIndex: 10, width: "45%", margin: "auto" }}
        >
          <Box
            // p='2px'
            color="white"
            mt="4"
            bg="black"
            rounded="md"
            shadow="md"
          >
            <input
              style={{
                width: "100%",
                height: "32px",
                marginTop: "-30px",
                background: "none",
                border: "1px solid grey",
              }}
              type="text"
              placeholder="Search your post"
            />
          </Box>
        </Slide>
      </ChakraProvider>
    </>
  );
};
