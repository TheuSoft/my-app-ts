import { Box } from "@chakra-ui/react";

export const LoginUser = ({ children }: any) => {
  return (
    <Box minHeight="100vh" backgroundColor="#575657" padding="25px">
      {children}
    </Box>
  );
};
