import { Box, Center, Checkbox, Field, Input, Stack } from "@chakra-ui/react";
import { boasVindas } from "../../services/boasVindas";
import { AppButton } from "../Button/AppButton";

export const LoginUser = () => {
  return (
    <Box minHeight="100vh" backgroundColor="#575657" padding="25px">
      <Center>
        <h1 style={{ color: "black" }}>Faça Login</h1>
      </Center>

      <Center>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const username = form.elements.namedItem(
              "username",
            ) as HTMLInputElement;
            alert(boasVindas(username?.value || ""));
          }}
        >
          <Stack maxW="sm" gap="4" align="flex-start">
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input name="username" placeholder="username" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input name="password" type="password" placeholder="password" />
            </Field.Root>

            <Checkbox.Root mt="2" value="remember me">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Remember me</Checkbox.Label>
            </Checkbox.Root>

            <AppButton type="submit">Entrar</AppButton>
            <AppButton type="button" onClick={() => alert("Ir para registro")}>
              Registrar
            </AppButton>
          </Stack>
        </form>
      </Center>
    </Box>
  );
};
