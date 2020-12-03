(function () {
  const $spot = document.querySelector(".spotright");
  const $navBtn = document.querySelector(".nav-btn");
  const $closeNavBtn = document.querySelector(".close-nav-btn");
  const $nav = document.querySelector("nav");

  window.onload = () => {
    $spot.style.backgroundImage = `radial-gradient(circle at 0% 0%,
      transparent 100px, rgba(0, 0, 0, 0.5) 250px)`;
  };
  window.onmousemove = (e) => {
    const xPer = Math.floor((e.pageX / window.innerWidth) * 100);
    const yPer = Math.floor((e.pageY / window.innerHeight) * 100);
    $spot.style.backgroundImage = `radial-gradient(circle at ${xPer}% ${yPer}%,
      transparent 100px, rgba(0, 0, 0, 0.5) 150px)`;
  };

  $nav.onmouseover = (e) => {
    if (!e.target.matches("nav ul a")) return;
    e.target.nextElementSibling.style.width = "100%";
  };
  $nav.onmouseout = (e) => {
    if (!e.target.matches("nav ul a")) return;
    e.target.nextElementSibling.style.width = "0%";
  };
  $navBtn.onclick = () => {
    document.querySelector(".wrap").onanimationend = null;
    document.querySelector(".wrap").classList.add("on");
  };
  $closeNavBtn.onclick = () => {
    document.querySelector(".wrap").classList.add("off");
    document.querySelector(".wrap").onanimationend = () => {
      document.querySelector(".wrap").classList.remove("off");
      document.querySelector(".wrap").classList.remove("on");
    };
  };
})();
