export async function grabSprints() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
      json.forEach((element,index) => {
        let sprinna = document.querySelector(".sprintContainer");
        let newTodo = document.createElement("div");
        newTodo.setAttribute("class", "todo");
        newTodo.innerHTML = `${index + 1}: ${element.title}`;
        sprinna.append(newTodo);
      });
    });
}
