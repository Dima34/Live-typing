const frameHolders = document.querySelectorAll(".frame-holder");

frameHolders.forEach(holder=>{
    const playBtn = holder.querySelector("button");
    const frameSrc = holder.getAttribute("data-IFrameSrc");

    playBtn.onclick = () =>{
        holder.innerHTML = `
        <iframe style="border: 0; width: 100%; height: 100%;" loading="lazy" title="multiplication table game" src="${frameSrc}"></iframe>
        `
    }
})
    
function delayedFrameLoad() {
    const delayedIFrames = document.querySelectorAll('iframe[data-delayedSrc]');

    delayedIFrames.forEach(el=>{
        el.setAttribute("src", el.getAttribute("data-delayedSrc"));
    })        
}

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>delayedFrameLoad(), 200)
});


// Burger menu
const burger = document.querySelector(".header__burger")
const burgerNav = document.querySelector("header nav");
const body = document.querySelector("body")
let isOpened = false

burger.addEventListener("click",()=>{
    isOpened = !isOpened;
    handleNav();
});

function handleNav(){
    if (isOpened) {
        burger.classList.add("active");
        burgerNav.classList.add("active");
        body.classList.add("scroll-lock")
    } else{
        burger.classList.remove("active");
        burgerNav.classList.remove("active");
        body.classList.remove("scroll-lock")
    }
}