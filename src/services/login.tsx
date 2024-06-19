
export const login = (username?: string,  password?: string): void => {
    if(username && password) {
        alert('Seja Bem vindo!');
        return;
    }

    alert("Por favor insira usuário e senha.")
}
