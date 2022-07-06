let buton = document.getElementById("liveToastBtn");
let listDOM = document.getElementById("list");
let taskDOM = document.getElementById("task");
let uzunluk = document.getElementsByTagName("li");


function removeButton() {
    this.parentElement.remove();
}
buton.addEventListener("click", addElement);
function addElement() {
    if (taskDOM.value.trim() == 0) {
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");

        let liDOM = document.createElement("li");
        liDOM.innerHTML = task.value;
        listDOM.appendChild(liDOM);
        taskDOM.value = "";
        liDOM.onclick = check;

        let kapat = document.createElement("span");
        kapat.textContent = "\u00D7";
        kapat.classList.add("close");
        kapat.onclick = removeButton;
        liDOM.append(kapat);
    }
}
function check() {
    this.classList.toggle("checked");
}

for (var i = 0; i < uzunluk.length; i++) {
    let kapat = document.createElement("span");
    kapat.textContent = "\u00D7";
    kapat.classList.add("close");
    kapat.onclick = removeButton;
    uzunluk[i].append(kapat);
    uzunluk[i].onclick = check;
}