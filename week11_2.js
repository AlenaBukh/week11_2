const inputElement = document.getElementById("txt");
const buttonElement = document.getElementById("btn");
const listElement = document.getElementById("list");

function createTask() {
  const liElement = document.createElement("li");
  const inputElementValue = inputElement.value;
  liElement.textContent = inputElementValue;
  liElement.addEventListener("click", checkTask);
  listElement.appendChild(liElement);
  inputElement.value = "";
}

const checkTask = (event) => {
  const clickedLi = event.target;
  clickedLi.classList.toggle("done");
};
