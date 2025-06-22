function Mainfunction() {
  setTimeout(display, 4000);
}

function display() {
  document.getElementById("mainContent").style =
    "display: block; opacity: 1; transition: opacity 1s ease-in-out";
  document.getElementById("loader").style =
    "display: none; opacity: 0; transition: opacity 0s ease-in-out";
}

function ValidateForm() {
  // Clear previous errors
  document.getElementById("petNameError").innerHTML = "";
  document.getElementById("petTypeError").innerHTML = "";
  document.getElementById("petAgeError").innerHTML = "";

  let name = document.getElementById("petName").value;
  let type = document.getElementById("petType").value;
  let age = document.getElementById("petAge").value;

  if (name === "") {
    document.getElementById("petNameError").innerHTML =
      "Please enter your pet's name";
    document.getElementById("petName").focus();
    return false;
  }
  if (type === "") {
    document.getElementById("petTypeError").innerHTML =
      "Please select your pet's type";
    document.getElementById("petType").focus();
    return false;
  }
  if (age === "") {
    document.getElementById("petAgeError").innerHTML =
      "Please enter your pet's age";
    document.getElementById("petAge").focus();
    return false;
  }

  return true; // allow form submission

  //     document.getElementById("petNameError").innerHTML = "";
  //     document.getElementById("petTypeError").innerHTML = "";
  //     document.getElementById("petAgeError").innerHTML = "";

  //     if(document.frm.petName.value == "")
  //     {
  //        document.getElementById("petNameError").innerHTML = "Please enter your pet's name";
  //        document.frm.petName.focus();
  //        return false;
  //       }

  //       if(document.frm.petType.value == "")
  //     {
  //        document.getElementById("petTypeError").innerHTML = "Please select your pet's type";
  //        document.frm.petType.focus();
  //        return false;

  //       }

  //    if(document.frm.petAge.value == "")
  //     {
  //        document.getElementById("petAgeError").innerHTML = "Please enter your pet's age";
  //        document.frm.petAge.focus();
  //        return false;

  //       }

  //       return true;
}

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("Right click disabled");
});
