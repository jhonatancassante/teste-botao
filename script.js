let notButton = document.getElementById("notButton");
let yesButton = document.getElementById("yesButton");

notButton.addEventListener("mousemove", (e) => {
  let randomPositionTop = Math.floor(Math.random() * 900);
  let randomPositionRight = Math.floor(Math.random() * 1500);
  let randomPositionBottom = Math.floor(Math.random() * 900);
  let randomPositionLeft = Math.floor(Math.random() * 1500);

  notButton.style.top = `${randomPositionTop}px`;
  notButton.style.left = `${randomPositionRight}px`;
  notButton.style.left = `${randomPositionBottom}px`;
  notButton.style.left = `${randomPositionLeft}px`;
});
