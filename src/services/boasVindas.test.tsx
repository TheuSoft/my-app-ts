import { boasVindas } from "../services/boasVindas";

describe("boasVindas", () => {
  it("deve retornar mensagem com nome informado", () => {
    expect(boasVindas("Matheus")).toBe("Seja bem-vindo(a), Matheus!");
  });

  it("deve usar 'usuário' quando nome vier vazio", () => {
    expect(boasVindas("   ")).toBe("Seja bem-vindo(a), usuário!");
  });
});
