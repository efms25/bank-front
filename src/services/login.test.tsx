import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login("user", "pass")
        expect(mockAlert).toHaveBeenCalledWith('Seja Bem vindo!')
    })

    it('Deve inserir um alerta de ausência de login ou senha', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith("Por favor insira usuário e senha.")
    } )
})