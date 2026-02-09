const heartsContainer = document.querySelector(".hearts");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const noText = document.getElementById("noText");

let noCount = 0;

const noMessages = [
  "Ek baar aur soch lo 😌",
  "Sach me NO? 😢",
  "Itna bhi bhav mat khao 😭",
  "No bol rahe ho… pachtaoge 💔",
  "Last chance hai 😳",
  "Ab YES hi bacha hai 😏"
];

/* Floating hearts generator */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 300);

/* NO button logic */
noBtn.addEventListener("click", () => {
  if (noCount < noMessages.length) {
    noText.innerText = noMessages[noCount];
    noCount++;

    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = currentSize + 6 + "px";
    yesBtn.style.padding = "18px 40px";
  }
});

yesBtn.addEventListener("click", ()=>{
    window.location.href = "yes.html";
});

