import { useContext, useEffect, useState } from "react";
import CardInfo from "../components/CardInfo/CardInfo";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "@/components/AppContext/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();

  const context = useContext(AppContext);
  console.log(context);

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualData = new Date();
  const { id } = useParams();
  const navigate = useNavigate();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} gap={8} paddingTop={16}>
        {userData === null || userData === undefined ? (
          <Center>
            <Spinner size="lg" color="blue" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo , ${userData?.name || "Usuário"}`}
              content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} /  ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo Atual" content={`R$ ${userData?.balance || "0,00"}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
