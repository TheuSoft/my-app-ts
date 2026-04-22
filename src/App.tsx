import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Header } from "./components/Header/Header";
import { Provider } from "./components/ui/provider";
import ContaInfo from "./pages/ContaInfo";
import { AppContextProvider } from "./components/AppContext/AppContext";
// // Componente de estilo usando styled-components
// const Box = styled.div`
//   background-color: orange;
// `;

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/conta-info" element={<ContaInfo />} />
          </Routes>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
