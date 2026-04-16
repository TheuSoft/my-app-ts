import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "matheu@hotmail.com";
  it ("deve exibir um alerta de boas-vindas caso o email seja válido", async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Login realizado ${mockEmail}!`);
  })

  it('Deve exibir um erro caso o email seja inválido', async () => {
    await login('email@invalido.com');
    expect(mockAlert).toHaveBeenCalledWith('Email inválido!');
  });
});
