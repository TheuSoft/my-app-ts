import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactElement, useContext } from "react";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Header } from "./components/Header/Header";
import { Provider } from "./components/ui/provider";
import ContaInfo from "./pages/ContaInfo";
import { AppContext, AppContextProvider } from "./components/AppContext/AppContext";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useContext(AppContext);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/conta/:id"
              element={
                <ProtectedRoute>
                  <Conta />
                </ProtectedRoute>
              }
            />
            <Route
              path="/conta-info"
              element={
                <ProtectedRoute>
                  <ContaInfo />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
