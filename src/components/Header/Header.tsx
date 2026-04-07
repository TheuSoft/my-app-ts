import { Flex, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "src/logo.png";

export const Header = () => {
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
