
    
function delayedFrameLoad() {
    const delayedIFrames = document.querySelectorAll('iframe[data-delayedSrc]');

    delayedIFrames.forEach(el=>{
        el.setAttribute("src", el.getAttribute("data-delayedSrc"));
    })        
}

    setTimeout(()=>delayedFrameLoad(), 200)
    