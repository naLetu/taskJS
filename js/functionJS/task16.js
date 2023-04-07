const arr = [
  {
    name: "Igor",
    age: 17,
    isStudent: true,
    avatar: {
      src: "google.com",
      alt: "Igor's Avatar",
    },
  },
  {
    name: "Alex",
    age: 27,
    isStudent: false,
    avatar: {
      src: "google.com",
      alt: undefined,
    },
  },
];

function get(item) {
  return function (name) {
    return name[item];
  };
}

function propEq(key, value) {
  return function (item) {
    // delete item.avatar;
    return item[key] === value;
  };
}

const getOr= (props)

const names = arr.map(get("name")); // ['Igor', 'Alex'];
const alex = arr.find(propEq("name", "Alex")); // {name: 'Alex', age: 27, isStudent: false}
// const igor = arr.find(propEq("name", "Igor"));
const alexAge = get("age")(alex); /* написать код, используя методы map, find, get и propEq */ // 27

// console.log(names);
// console.log(alex);
// console.log(alexAge);

// console.log(getOr(['avatar', 'alt'], 'Cannot find', alex)) // undefined
// console.log(getOr(['avatar', 'alt'], 'Cannot find', igor)) // 'Igor\'s Avatar'
// console.log(getOr(['avatar', 'someKey'], 'Cannot find', igor)) // 'Cannot find'
