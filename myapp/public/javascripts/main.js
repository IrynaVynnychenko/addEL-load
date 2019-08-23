document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/users");
  xhr.send();
  xhr.addEventListener("load", function() {
    let data = JSON.parse(xhr.response);
    data.users.forEach((element, i) => {
      let newSymbol = document.createElement("h2");
      newSymbol.innerHTML = `Это юзер №${i+1}, зовут его ${element.name}`;
      let body = document.querySelector("body");
      body.appendChild(newSymbol);
    });
  });
});
