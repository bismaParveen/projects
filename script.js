let pupils = document.getElementsByClassName("pupil");
let pupilsArr = Array.from;

// pupils movement
let pupilStartPoint = -100;
let pupilRange = 200;

// mouse X position
let mouseXStartPoint = 300;
let mouseXEndPoint = window.innerWidth - 300;
let currentPosition = 0;
let fracXValue = 0;

// mouse Y position
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;
};

window.addEventListener("mousemove", mouseMove);
