const trailContainer = document.getElementById("snake-trail");
const gridSize = 11;
const maxSegments = 30;
const segments = [];
let redSnake = false;

for (let i = 0; i < maxSegments; i++) {
  const div = document.createElement("div");
  if (redSnake) {
    div.classList.add("red-snake-segment");
  } else {
    div.classList.add("snake-segment");
    }

  div.style.opacity = 1 - i / maxSegments;
  div.style.transform = `translate(0px, 0px)`;
  trailContainer.appendChild(div);
  segments.push({ x: 0, y: 0, element: div });
}

let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = Math.round(e.clientX / gridSize) * gridSize;
  targetY = Math.round(e.clientY / gridSize) * gridSize;
});

function animate() {
  for (let i = segments.length - 1; i > 0; i--) {
    segments[i].x = segments[i - 1].x;
    segments[i].y = segments[i - 1].y;
    segments[i].element.style.transform = `translate(${segments[i].x}px, ${segments[i].y}px)`;
  }

  const head = segments[0];
  if (head.x !== targetX || head.y !== targetY) {
    if (head.x !== targetX) {
      head.x += gridSize * Math.sign(targetX - head.x);
    } else if (head.y !== targetY) {
      head.y += gridSize * Math.sign(targetY - head.y);
    }
    head.element.style.transform = `translate(${head.x}px, ${head.y}px)`;
  }

  setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();

const reqp = document.querySelectorAll(".reqp");
let clickreq = false;

reqp.forEach((req) => {
  req.addEventListener("click", () => {
    const parent = req.parentElement;
    const text = parent.querySelector("p");
    if (clickreq) {
      text.classList.remove("strike");
      clickreq = false;
    } else {
      text.classList.add("strike");
      clickreq = true;
    }
    const allStriked = Array.from(reqp).every((el) =>
        el.classList.contains("strike")
      );
  
      if (allStriked) {
        redSnake = true;
      }
      else {
        redSnake = false;
      }
      segments.forEach((seg) => {
        seg.element.classList.remove("snake-segment", "red-snake-segment");
        seg.element.classList.add(redSnake ? "red-snake-segment" : "snake-segment");
      });
  });
}
);

const sec = Array.from(document.querySelectorAll("section"));

document.querySelectorAll("button.next").forEach((btn) => {
  btn.addEventListener("click", () => {
    const curSec = btn.closest("section");
    const curIndex = sec.indexOf(curSec);
    const nextSec = sec[curIndex + 1];
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll("button.previous").forEach((btn) => {
  btn.addEventListener("click", () => {
    const curSec = btn.closest("section");
    const curIndex = sec.indexOf(curSec);
    const prevSec = sec[curIndex - 1];
    if (prevSec) {
      prevSec.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let skipped = false;

window.addEventListener("DOMContentLoaded", () => {
    const skipButton = document.querySelector(".skip");
  
    if (window.innerWidth > 650){
        setTimeout(() => {
          skipButton.classList.add("visible");
        }, 5000);
        skipButton.addEventListener("click", () => {
          const start = document.getElementById("start");
          start.scrollIntoView({ behavior: "smooth" });
          skipped = true;
        });
        const stvid = document.getElementById("stvid");
        const start = document.getElementById("start");
      
        stvid.addEventListener("ended", () => {
          if (!skipped) {
            start.scrollIntoView({ behavior: "smooth", inline: "start" });
          }
        });
    }

    
  });

  document.querySelector('.launch').addEventListener('click', () => {
    document.querySelector('.launch').classList.add('launchplay');
  });
