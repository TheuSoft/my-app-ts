const conta = {
  email: "matheu@hotmail.com",
  password: "123456",
  name: "Matheus",
  balance: 1000,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
