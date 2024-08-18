var Apply_color=document.getElementById("apply_color");
Apply_color.addEventListener("click",()=>{
    for(var i=1;i<=6;i++){
        var inputElement=document.getElementById(`color${i}`);
        var inputcolor=inputElement.value;
        document.documentElement.style.setProperty(`--c${i}-color`,inputcolor);
    }
    console.log("apply_color clicked.");
})