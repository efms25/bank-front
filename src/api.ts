const conta = {
    email: 'kodah@email.com',
    password: '123456',
    name: 'Eric Santana',
    balance: 1000000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
