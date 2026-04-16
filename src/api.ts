const conta = {
    email:'matheu@hotmail.com',
    password:'123456',
    name:'Matheus',
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});