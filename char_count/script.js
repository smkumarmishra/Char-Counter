const textArea=document.getElementById("txt-area")
const totalChar=document.getElementById("total-char")
const remainChar=document.getElementById("rem-char")

//creating one keyUp function

textArea.addEventListener("keyup",
    () =>{
   
        updateCounter();
   })
   updateCounter();

function updateCounter(){
    totalChar.innerText=textArea.value.length

    remainChar.innerText=textArea.getAttribute("maxLength")-textArea.value.length

}