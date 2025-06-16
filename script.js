const overlay = document.querySelector('.crt-overlay');
const skipButton = document.querySelector('#skip');
const storyVideo = document.getElementById('story-vid')
const home = document.getElementById("home");
const requirements = document.getElementById("requirements");
const examples = document.getElementById("examples");
const gallery = document.getElementById("gallery");
const wrapper = document.querySelector('.wrapper')

const toHomeButton = document.querySelectorAll('.tohome');
const toReqsButton = document.querySelectorAll('.toreqs');
const toExButton = document.querySelectorAll('.toex');
const toGalButton = document.querySelectorAll('.togal');

const trailContainer = document.getElementById("snake-trail");
    const gridSize = 12;
    const maxSegments = 30;
    const segments = [];

let skipped = false;

skipButton.addEventListener('click', () => {
  skipped = true;
  }
);

    setInterval(() => {
      const offset = Math.random() * 4;
      overlay.style.transform = `translateY(${offset}px)`;
    }, 100);

    setTimeout(() => {
      skipButton.style.display = 'block';
    }, 5000);

    toHomeButton.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        home.scrollIntoView({ behavior: "smooth", inline: "start" });
      });
    });

    toReqsButton.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        requirements.scrollIntoView({ behavior: "smooth", inline: "start" });
      });
    }
    );
    toExButton.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        examples.scrollIntoView({ behavior: "smooth", inline: "start" });
      });
    }
    );
    toGalButton.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        gallery.scrollIntoView({ behavior: "smooth", inline: "start" });
      });
    }
    );

      wrapper.addEventListener('wheel', function (e) {
        e.preventDefault();
      }, { passive: false });
    
      wrapper.addEventListener('touchmove', function (e) {
        e.preventDefault();
      }, { passive: false });

    storyVideo.addEventListener('ended', () => {
        if (!skipped){
            home.scrollIntoView({ behavior: "smooth", inline: "start" });
        }

       
    }
    );
      
      
    for (let i = 0; i < maxSegments; i++) {
        const div = document.createElement("div");
        div.classList.add("snake-segment");
        div.style.opacity = 1 - i / maxSegments;
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
        const head = segments[0];
        if (head.x !== targetX || head.y !== targetY) {
          if (head.x !== targetX) {
            head.x += gridSize * Math.sign(targetX - head.x);
          } else if (head.y !== targetY) {
            head.y += gridSize * Math.sign(targetY - head.y);
          }
        }
  
        head.element.style.transform = `translate(${head.x}px, ${head.y}px)`;
  
        for (let i = segments.length - 1; i > 0; i--) {
          const curr = segments[i];
          const prev = segments[i - 1];
          curr.x = prev.x;
          curr.y = prev.y;
          curr.element.style.transform = `translate(${curr.x}px, ${curr.y}px)`;
        }
  
        setTimeout(() => requestAnimationFrame(animate), 50);
      }
  
      animate();