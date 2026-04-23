import { Navigate, useNavigate } from "react-router-dom";
import { AppButton } from "../components/Button/AppButton";
import { login as validateLogin } from "../services/login";
import { Box, Card, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../components/AppContext/AppContext";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoggedIn, user, login } = useContext(AppContext);
  const navigate = useNavigate();

  if (isLoggedIn && user) {
    return <Navigate to="/conta-info" replace />;
  }

  const handleLogin = async () => {
    const data = await validateLogin(email, password);
    if (!data) {
      alert("Login falhou!");
      return;
    }
    login({
      name: data.name,
      email: data.email,
      id: data.id,
    });

    navigate("/conta-info");
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
          <Input
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Center>
            <AppButton onClick={handleLogin} />
          </Center>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default Home;
