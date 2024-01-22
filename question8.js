// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "petek",
    isActive: true,
  },
  {
    id: 2,
    name: "emre",
    isActive: true,
  },
  {
    id: 3,
    name: "ali",
    isActive: true,
  },
];

//const nameResult = users.map((user) => user.name);

//1
const isNameExist = (name, users) => {
  let exists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      exists = true;
    }
  }
  return exists;
};

isNameExist("petek", users); // true

//2
const isNameExists = (name, arr) => arr.some((el) => el.name === name);

function nameIsExist(name, users) {
  let exists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      exists = true;
    }
  }
}
