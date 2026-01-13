function playMusic() {
  document.getElementById("music").play();
}

// tạo tim bay liên tục
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = Math.random() > 0.5 ? "💗" : "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}, 400);
