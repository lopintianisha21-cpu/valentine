function createHeartRain(){
    const heart = document.createElement("div");
    heart.classList.add("heart-rain");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeartRain, 200);

function openPage(page){
    window.location.href = page;
}

