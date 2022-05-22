const holder = document.querySelector(".frame-holder");
const iframe = document.querySelector(".frame-holder iframe");

const frameStartWidth = Number(iframe.getAttribute("width"));
const frameStartHeight = Number(iframe.getAttribute("height"));
const frameRatio = frameStartWidth / frameStartHeight;


iframe.removeAttribute("width");
iframe.removeAttribute("height");


function getElementWidth(el){
    return getComputedStyle(el).width.slice(0,-2);
}

function getElementHeight(el){
    return getComputedStyle(el).height.slice(0,-2);
}

function handleResize(){
    holderWidth = Number(getElementWidth(holder));
    
    console.log("resize handle " + holderWidth);


    if(holderWidth < frameStartWidth){
        iframe.style.width = "100%";
        iframe.style.height = holderWidth / frameRatio + "px";
    } else{
        iframe.style.width = frameStartWidth + "px";
        iframe.style.height = frameStartHeight + "px";
    }
}

handleResize();

window.addEventListener('resize', handleResize, false);
window.addEventListener('orientationchange', handleResize, false);

