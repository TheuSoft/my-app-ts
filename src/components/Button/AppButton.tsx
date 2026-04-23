import { Button } from "@chakra-ui/react";

interface IDButton {
  onClick: () => void | Promise<void>;
}

export const AppButton = ({ onClick }: IDButton) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      Entrar
    </Button>
  );
};
