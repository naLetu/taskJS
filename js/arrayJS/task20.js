const users = [
  { name: "Sveta", age: 23 },
  { name: "Petya", age: 31 },
  { name: "Sasha", age: 27 },
  { name: "Anna", age: 25 },
];

const sortUsers = []
users.forEach((item) => sortUsers.push(item));
sortUsers.sort((a,b) => a.age - b.age)

console.log(sortUsers);
