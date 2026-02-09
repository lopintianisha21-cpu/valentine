/* Rose petals */
function createPetal(){
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌹";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = Math.random() * 15 + 15 + "px";
    petal.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },5000);
}

setInterval(createPetal, 300);

document.getElementById("nextBtn").addEventListener("click", ()=>{
    window.location.href = "next.html";
});
