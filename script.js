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
      
      