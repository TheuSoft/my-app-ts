import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/Button/AppButton";
import { login } from "../services/login";
import { Box, Card, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../components/AppContext/AppContext";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return;
    }

    setIsLoggedIn(true);
    navigate("/conta/1");
  };

  return (
    <Box padding="25px">
      <Card.Root>
        <Card.Body>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input placeholder="password" />
          <Center>
            <AppButton onClick={() => validateUser(email)} />
          </Center>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default Home;
