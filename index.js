let images=document.querySelectorAll(".row .img ");



images.forEach(function(el){
    el.addEventListener("click",(ii )=>{
       
        let overlay=document.createElement("div");
        overlay.classList.add("overlay")
       
        let imagHolder =document.createElement("div")
        imagHolder.classList.add("img-holder")
       let img= document.createElement("img")
      img.src=ii.target.dataset.photo
     let text= document.createTextNode("x")
    let close=document.createElement("span")
    close.classList.add("close")
     close.appendChild(text)
     imagHolder.appendChild(close)
       imagHolder.appendChild(img)
        overlay.appendChild(imagHolder)
        document.body.appendChild(overlay)
        close.onclick=function(){
            overlay.remove()
        }
    })
})

