import { Button } from "@chakra-ui/react";
import type { MouseEventHandler, ReactNode } from "react";

type AppButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

export function AppButton({
  children,
  onClick,
  type = "button",
}: AppButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      colorPalette="blue"
      size="lg"
      width="100%"
      mt="15px"
    >
      {children}
    </Button>
  );
}
