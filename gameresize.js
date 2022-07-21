const holder = document.querySelector(".frame-holder");
const iframe = document.querySelector(".frame-holder iframe");

const frameStartWidth = Number(iframe.getAttribute("width"));
const frameStartHeight = Number(iframe.getAttribute("height"));
const frameRatio = frameStartWidth / frameStartHeight;

// Set default styles
iframe.style.position = "absolute";
iframe.style.left = "0px";
iframe.style.top = "0px";


iframe.removeAttribute("width");
iframe.removeAttribute("height");


function getElementWidth(el){
    return getComputedStyle(el).width.slice(0,-2);
}

function getElementHeight(el){
    return getComputedStyle(el).height.slice(0,-2);
}

function handleResize(){
    let widthAvailable = Number(getElementWidth(holder));
    let heightAvailable = window.innerHeight - 100;    

    console.log(`with available` + widthAvailable);

    let acceptable = findAcceptableH(widthAvailable, heightAvailable);

    holder.style.height = acceptable.height + "px";
    iframe.style.height = acceptable.height + "px";
    iframe.style.width = acceptable.width + "px";
}

function findAcceptableH(width, height){
    let acceptibleH, acceptibleW

    for (let index = width; index > 0; index--) {
        if(index / frameRatio <= height){
            acceptibleH = index / frameRatio,
            acceptibleW = index
            break
        }        
    }

    return {
        height :acceptibleH, 
        width: acceptibleW
    }
}

handleResize();

window.addEventListener('resize', handleResize, false);
window.addEventListener('orientationchange', handleResize, false);