function createLoveRain(){
    const love = document.createElement("div");
    love.classList.add("love-rain");

    const texts = ["I LOVE YOU ❤️", "Love You 💖", "Forever ♾️"];
    love.innerText = texts[Math.floor(Math.random() * texts.length)];

    love.style.left = Math.random() * 100 + "vw";
    love.style.fontSize = Math.random() * 10 + 16 + "px";
    love.style.animationDuration = Math.random() * 3 + 5 + "s";

    document.body.appendChild(love);

    setTimeout(()=>{
        love.remove();
    },8000);
}

setInterval(createLoveRain, 300);
