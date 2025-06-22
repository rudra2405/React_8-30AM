let inputText = document.querySelector("#input_text");
let inputList = document.querySelector("#input_list");
let items = inputList.getElementsByTagName("li");

function addButton() {
  for (let item of items) {
    if (
      item.firstChild.nodeValue.trim().toLowerCase() ===
      inputText.value.trim().toLowerCase()
    ) {
      alert("Duplicate item not allowed");
      inputText.value = "";
      return;
    }
  }

  if (inputText.value === "") {
    alert("You have to write something");
    inputText.focus();
    return;
  } else {
    let LI = document.createElement("li");

    LI.innerText = inputText.value;

    let spanClass = document.createElement("span");

    spanClass.innerHTML = "<button class='delete-btn'>Delete</button>";

    LI.appendChild(spanClass);
    inputList.appendChild(LI);

    // spanClass.querySelector("button").onclick = function () {
    //   LI.remove(); // remove the parent <li>
    // };
  }

  inputText.value = "";
}

inputList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "BUTTON") {
    let li = e.target.closest("li");
    if (li.classList.contains("checked")) {
      li.remove(); // Delete only if checked
    } else {
      alert("mark before click on delete button");
      return;
    }
  }
});

// inputList.addEventListener("click", (e) => {
//   let li = e.target.closest("li");

//   if (li) {
//     if (e.target.tagName == "LI") {
//       li.classList.toggle("checked");
//     } else if (li.classList.contains("checked")) {
//       li.remove();
//     } else {
//       alert("mark before click on delete button");
//       return;
//     }
//   }
// });

////////////////////////////////////////////////////////////////////////////////////
inputText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addButton();
  }
});
