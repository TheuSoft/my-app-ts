import { Box, Center, Checkbox, Field, Input, Stack } from "@chakra-ui/react";
import { login } from "../../services/login";
import { AppButton } from "../Button/AppButton";
import { useState, useEffect} from "react";
import { api } from "../../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const LoginUser = () => {
  const [email, setEmail] = useState <string> ('');
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    }
    getData();
  }, []);

  console.log(userData);

  return (
    <Box minHeight="100vh" backgroundColor="#575657" padding="25px">
      {userData === null || userData === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Informacoes carregadas</h1>
      )}
      <Center>
        <h1 style={{ color: "black" }}>Faça Login</h1>
      </Center>
      <Center>
          <Stack maxW="sm" gap="4" align="flex-start">
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input name="username" placeholder="username" value={email} onChange={(event) => setEmail(event.target.value)} />
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

            <AppButton onClick={() => login(email)}/>
          </Stack>
      </Center>
    </Box>
  );
};
