import { Flex, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import logo from "src/logo.png";
import { AppContext } from "../AppContext/AppContext";

export const Header = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      gap={4}
      px={4}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      w="100%"
    >
      <Image src={logo} alt="Logo" boxSize="56px" objectFit="contain" />
      <Heading size="lg" fontSize="32px">
        Dio Bank
      </Heading>
    </Flex>
  );
};
