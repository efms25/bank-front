import { login } from "./login";

describe("login", () => {
  const mockEmail = "kodah@email.com";
  const mockPassword = "123456";
  it("Deve retornar um objeto com os dados do usuario", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toMatchObject({
      login: true,
      email: mockEmail,
      password: mockPassword,
      name: expect.any(String),
      id: expect.any(String),
    });
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("email@invalido.com", "senhaInvalida");
    expect(response).toMatchObject({
        login: false
    });
  });
});
