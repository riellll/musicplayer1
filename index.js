const rangeBar = document.querySelector(".rangeBar");
const audio = document.querySelector(".audio");
const playButton = document.querySelector("#playButton");
const time = document.querySelector(".time");

window.addEventListener("load", () => {
  audio.pause();
});

audio.onloadedmetadata = function () {
  rangeBar.max = audio.duration;
  rangeBar.value = audio.currentTime;
  //   console.log(rangeBar.max);
};

const playSong = (e) => {
//   console.log(e.target.className.includes("fa-circle-play"));
  if (e.target.className.includes("fa-circle-play")) {
    audio.play();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
  } else {
    audio.pause();
    e.target.classList.remove("fa-circle-pause");
    e.target.classList.add("fa-circle-play");
  }
};

// console.log(time.childNodes[0].textContent);
// console.log(audio);

if (audio.play()) {
  setInterval(() => {
    rangeBar.value = audio.currentTime;
    // time.childNodes[0].textContent = Math.floor(audio.currentTime)
    let seconds = Math.floor(audio.currentTime % 60);
    let minutes = Math.floor(audio.currentTime / 60);
    time.childNodes[0].textContent =
      "0" + minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds);
    // console.log(audio.currentTime % 60);
  }, 200);
}

rangeBar.onchange = () => {
  audio.play();
  audio.currentTime = rangeBar.value;
  playButton.classList.remove("fa-circle-play");
  playButton.classList.add("fa-circle-pause");
};

playButton.addEventListener("click", playSong);
