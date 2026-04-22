import { useContext, useEffect, useState } from "react";
import CardInfo from "../components/CardInfo/CardInfo";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const actualData = new Date();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const getData = async () => {
      const data = (await api) as UserData;
      setUserData(data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (userData && id !== userData.id) {
      navigate("/");
    }
  }, [userData, id, navigate]);

  if (!userData) {
    return (
      <Center>
        <Spinner size="lg" color="blue" />
      </Center>
    );
  }

  return (
    <Center>
      <SimpleGrid columns={2} gap={8} paddingTop={16}>
        <CardInfo
          mainContent={`Bem vindo, ${userData.name || "Usuário"}`}
          content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} / ${actualData.getHours()}:${actualData.getMinutes()}`}
        />
        <CardInfo mainContent="Saldo Atual" content={`R$ ${userData.balance || "0,00"}`} />
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
