const holder = document.querySelector(".frame-holder");
const iframe = document.querySelector(".frame-holder iframe");

const frameStartWidth = Number(getElementWidth(iframe));
const frameStartHeight = Number(getElementHeight(iframe));
const frameRatio = frameStartWidth / frameStartHeight;

function getElementWidth(el){
    return getComputedStyle(el).width.slice(0,-2);
}

function getElementHeight(el){
    return getComputedStyle(el).height.slice(0,-2);
}

function handleResize(){
    holderWidth = Number(getElementWidth(holder));
    frameWidth = Number(getElementWidth(iframe));
    console.log("resize handle");
    
    if(holderWidth < frameStartWidth){
        iframe.setAttribute("width", holderWidth);
        iframe.setAttribute("height", holderWidth / frameRatio);
    }
}

handleResize();

window.addEventListener('resize', handleResize, false);
window.addEventListener('orientationchange', handleResize, false);
