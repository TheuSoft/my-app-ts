import { Button } from "@chakra-ui/react";
import type { MouseEventHandler} from "react";

interface IDButton{
  onClick: MouseEventHandler
}

export const AppButton = ({onClick }: IDButton) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      Entrar
    </Button>
  );
}
