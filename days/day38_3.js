for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const users = ["Max", "Anna", "Joel"];

// console.log(users[0], users[1], users[2]);

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "John",
  age: 60,
  isAdmin: true,
};

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done!");
