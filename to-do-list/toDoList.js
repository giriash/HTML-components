var listInput = document.querySelector("#input-list-text");
var listContainer = document.querySelector(".list-section");
var alertContainer = document.querySelector(".alert-section");
var listArr = [];

function generateList(listText) {
  var listContainer = document.createElement("div");
      listContainer.className = "list-ele content-ele";
  var listContent = document.createElement("span");
      listContent.innerHTML = listText;
  var listRemove = document.createElement("span");
      listRemove.innerHTML = "X";
      listRemove.className = "list-remove-btn";
      listRemove.addEventListener("click", removeList);
  listContainer.appendChild(listContent);
  listContainer.appendChild(listRemove);
  return listContainer;
}

function duplicatedList(value) {
  return listArr.includes(value);
}

function duplicatedAlert(show) {
  console.log("show: ", show);
  alertContainer.style.display = show ? 'block' : 'none';
  
}

function removeList(event) {
  listContainer.removeChild(event.target.parentNode);
  var listArrIndex = listArr.indexOf(listInput.value);
  listArr.slice(listArrIndex, 1);
}

function addList() {
  if(duplicatedList(listInput.value)) {
    duplicatedAlert(true);
  } else {
    duplicatedAlert(false);
    listArr.push(listInput.value);
    var newList = generateList(listInput.value);
    listContainer.appendChild(newList);
  }
}
