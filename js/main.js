const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

let currentImage = 0;

const itemsDom = document.querySelector(".items");

for (let i = 0; i < imagesArray.length; i++) {
    itemsDom.innerHTML += `<div class="item">
                            <img class=img-slide" src="${imagesArray[i]}" alt=""/>
                            </div>`;
}

const itemList = document.getElementsByClassName(".item");

itemList[0].classList.add("show");

const next = document.querySelector(".next");

next.addEventListener("click"), function () {
    itemList[currentImage].classList.remove("show");
    currentImage++;
    itemList[currentImage].classList.add("show");
    prev.classList.remove("hidden");

    if (currentImage === itemList.length - 1) {
        next.classList.add("hidden");
    }
}

const prev = document.querySelector(".prev");
prev.addEventListener("click"), function () {
    itemList[currentImage].classList.remove("show");
    currentImage--;
    itemList[currentImage].classList.add("show");
    next.classList.remove("hidden");

    if (currentImage === 0) {
        prev.classList.add("hidden");
    }
}