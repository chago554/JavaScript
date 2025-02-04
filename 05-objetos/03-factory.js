function createUser(name, email) {
  return {
    name,
    email,
    active: true,
    recoveryPassword: function () {
      console.log("Recovering password..");
    },
  };
}

let user1 = createUser("Santiago", "santiago@gmail.com");

console.log(user1);
