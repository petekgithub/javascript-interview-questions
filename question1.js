// Mapping users to get usernames
// write code to get array of names from given array of users

const users = [
  {
    id: 1,
    name: "jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "john",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "mike",
    isActive: false,
    age: 30,
  },
];

// // Get back only active users
// const result = users.filter((user) => user.isActive).map((user) => user.name);
// console.log(result);

// //2
// const result = users.map((user) => user.name);
// console.log(result);

// //3
// const names = [];
// users.forEach((user) => {
//   names.push(user.name);
// });

// //4
// const namess = [];
// for (let i = 0; i < users.length; i++) {
//   namess.push(users[i]);
// }

// Sort users by age descending
// 1-sort, filter, name

const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
