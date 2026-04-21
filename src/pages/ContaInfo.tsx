import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text>Conta Info</Text>
      <Link to="/conta/1">
        <Text>Ver detalhes</Text>
      </Link>
    </>
  );
};

export default ContaInfo;
