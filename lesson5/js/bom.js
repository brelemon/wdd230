const favchap = document.querySelector("#favchap");
const buildButton = document.querySelector("#chap");
const list = document.querySelector("#list");

const bomList = [];

buildButton.addEventListener("click", () => {
  const inputValue = favchap.value;
  bomList.push(inputValue);

  list.innerHTML = "";

  for (let i = 0; i < bomList.length; i += 1) {
    const currentBomValue = bomList[i];
    const newElement = createListElement(currentBomValue, i);

    list.appendChild(newElement);
  }
});

function createListElement(value, index) {
  const buttonId = value + index.toString();
  const newElement = document.createElement("li");
  const removeButtonHtml = getButtonHtml(buttonId, index);

  removeButtonHtml.addEventListener("click", () => {
    bomList.splice(index, 1);
    newElement.remove();
  });

  newElement.innerHTML = value;
  newElement.appendChild(removeButtonHtml);

  return newElement;
}

function getButtonHtml(id, index) {
  const x = "❌";

  const close = document.createElement("button");
  close.id = id;
  close.innerHTML = x;

  return close;
}
