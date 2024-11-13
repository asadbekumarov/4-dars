let Elid = document.querySelector(".id");
let Eltitle = document.querySelector(".title");
let Elfile = document.querySelector(".file");
let Eldecraption = document.querySelector(".decraption");
let Elbtn = document.querySelector(".submit");
let Elcards = document.querySelector(".cards");
let Elcontainer = document.querySelector(".container");
let adUser = document.querySelector(".user");
let adPass = document.querySelector(".pass");
let adLog = document.querySelector(".log");
let Eladd = document.querySelector(".admin__panel");
/////////////////////////////////////////////

adLog.addEventListener("click", function () {
  let adValueuser = adUser.value;
  let adValuepass = adPass.value;

  if (adValueuser === "john" && adValuepass === "12345678") {
    Elcontainer.style.display = "block";
    Eladd.style.display = "none";
  } else {
    Elcontainer.style.display = "none";
    Eladd.style.display = "block";
  }
});

/////////////////////////////////////////////
function loadCards() {
  let savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  savedCards.forEach((card) => createCard(card));
}
loadCards();
/////////////////////////////////////////////
function createCard(card) {
  let crId = document.createElement("h4");
  let crTitle = document.createElement("h3");
  let crPhoto = document.createElement("img");
  let crDecraption = document.createElement("p");
  let crDiv = document.createElement("div");
  let crBtn = document.createElement("button");
  /////////////////////////////////////////////
  crId.textContent = card.id;
  crTitle.textContent = card.title;
  crDecraption.textContent = card.decraption;
  crPhoto.src = card.file;
  crPhoto.style.width = "200px";
  /////////////////////////////////////////////
  crBtn.textContent = "Delete";
  crBtn.addEventListener("click", function () {
    crDiv.remove();
    deleteCard(card.id);
  });
  /////////////////////////////////////////////
  crBtn.classList.add("del");
  crDiv.classList.add("card");
  crPhoto.classList.add("photo");
  /////////////////////////////////////////////
  crDiv.appendChild(crId);
  crDiv.appendChild(crPhoto);
  crDiv.appendChild(crTitle);
  crDiv.appendChild(crDecraption);
  crDiv.appendChild(crBtn);
  /////////////////////////////////////////////
  Elcards.appendChild(crDiv);
}
/////////////////////////////////////////////
Elbtn.addEventListener("click", function () {
  let idValue = Elid.value;
  let titleValue = Eltitle.value;
  let decraptionValue = Eldecraption.value;
  let fileValue = Elfile.value;
  /////////////////////////////////////////////
  if (idValue == "" && titleValue == "" && decraptionValue == "") {
    alert("Malumot kiting");
    return;
  }
  /////////////////////////////////////////////
  let newCard = {
    id: idValue,
    title: titleValue,
    decraption: decraptionValue,
    file: fileValue,
  };
  createCard(newCard);
  saveCard(newCard);
  /////////////////////////////////////////////
  Elid.value = "";
  Eltitle.value = "";
  Elfile.value = "";
  Eldecraption.value = "";
});
/////////////////////////////////////////////
function saveCard(card) {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push(card);
  localStorage.setItem("cards", JSON.stringify(cards));
}
/////////////////////////////////////////////
function deleteCard(id) {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards = cards.filter((card) => card.id !== id);
  localStorage.setItem("cards", JSON.stringify(cards));
}
