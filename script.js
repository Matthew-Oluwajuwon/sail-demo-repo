const timer = document.getElementById("demo");

const date = new Date();
setInterval(() => {
  timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
