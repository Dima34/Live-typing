    function delayedFrameLoad() {
        const delayedIFrames = document.querySelectorAll('iframe[data-delayedSrc]');

        delayedIFrames.forEach(el=>{
            el.setAttribute("src", el.getAttribute("data-delayedSrc"));
        })        
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(()=>delayedFrameLoad(), 200)
    });