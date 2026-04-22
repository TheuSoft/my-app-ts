import { Button, Flex, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import logo from "src/logo.png";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      gap={4}
      px={4}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      w="100%"
    >
      <Flex align="center" gap={4}>
        <Image src={logo} alt="Logo" boxSize="56px" objectFit="contain" />
        <Heading size="lg" fontSize="32px">
          Dio Bank
        </Heading>
      </Flex>

      {isLoggedIn && (
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Flex>
  );
};
