let listUser = document.getElementById("listUser");

// const text = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(
//     (Response) => Response.json())
//     .then((Response)=> alert(Response))
// ;
// .then((users)=>{
//     listUser.innerText = ''
// })

// users.map(user => {
//     return user.name;
// })
// console.log(text);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => Response.json())
  .then((users) => {
    listUser.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      listUser.appendChild(li);
    });
  })
  .catch((Error) => {
    console.log(Error);
    alert("ошибка при загрузке списка пользователей");
  });
