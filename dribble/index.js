const bars = document.querySelector("#bars");
const iBars = document.querySelector("#bars");
const uList = document.querySelector(".nav-list");
bars.addEventListener("click", (b)=>{
    b.preventDefault();
    uList.classList.toggle("is-active");
});
// {} ;