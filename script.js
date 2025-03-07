

// ----------------nav bar-----------------------------
var menuicon = document.querySelector(".menu-icon");
var menusecond = document.querySelector(".menusecond");
menusecond.style.height = "0%";

function toggleMenu() {
  if (menusecond.style.height == "0%") {
    menusecond.style.height = "420px";
  } else {
    menusecond.style.height = "0%";
  }
}
//-----------------home drop down---------------------

var homedropdown = document.querySelector(".home-dropdown");
var homemenu = document.querySelector(".home-menu");
var drop = 0;

homedropdown.addEventListener("click", function () {
  if (drop == 0) {
    homemenu.style.display = "block";
    drop = 1;
  } else {
    homemenu.style.display = "none";
    drop = 0;
  }
});

var homedropdownsecond = document.querySelector(".home-dropdown-second");
var homemenusecond = document.querySelector(".home-menu-second");
var dropsecond = 0;

homedropdownsecond.addEventListener("click", function () {
  if (dropsecond == 0) {
    homemenusecond.style.display = "block";
    dropsecond = 1;
  } else {
    homemenusecond.style.display = "none";
    dropsecond = 0;
  }
});

//------------------on scroll animation-------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
   
        const img2 = entry.target.querySelector('.section-img');
        const img4 = entry.target.querySelector('.section-img-2');
        const img3 = entry.target.querySelector('.work-cards');
        const img5 = entry.target.querySelector('.use-case-img img');
        const box1 = entry.target.querySelector('.feature-box-1');
        const box2 = entry.target.querySelector('.feature-box-2');
        const box3 = entry.target.querySelector('.feature-box-3');
        const box4 = entry.target.querySelector('.feature-box-4');
        const box5 = entry.target.querySelector('.feature-last-box');
        const toolbox1 = entry.target.querySelector('.tool-box-1');
        const toolbox2 = entry.target.querySelector('.tool-box-2');
        const toolbox3 = entry.target.querySelector('.tool-box-3');
        const toolbox4 = entry.target.querySelector('.tool-box-4');
        const toolbox5 = entry.target.querySelector('.tool-box-5');
        const toolbox6 = entry.target.querySelector('.tool-box-6');
        const toolbox7 = entry.target.querySelector('.tool-box-7');

        

        if (entry.isIntersecting) {
           
            if (img2) img2.classList.add('analysis-anim');
            if (img4) img4.classList.add('reportanim');
            if (img3) img3.classList.add('workanim');
            if (img5) img5.classList.add('usecaseanim');
            if (box1) box1.classList.add('featureboxanim1');
            if (box2) box2.classList.add('featureboxanim2');
            if (box3) box3.classList.add('featureboxanim3');
            if (box4) box4.classList.add('featureboxanim4');
            if (box5) box5.classList.add('featureboxanim5');
            if (toolbox1) toolbox1.classList.add('toolboxanim1');
            if (toolbox2) toolbox2.classList.add('toolboxanim2');
            if (toolbox3) toolbox3.classList.add('toolboxanim3');
            if (toolbox4) toolbox4.classList.add('toolboxanim4');
            if (toolbox5) toolbox5.classList.add('toolboxanim5');
            if (toolbox6) toolbox6.classList.add('toolboxanim6');
            if (toolbox7) toolbox7.classList.add('toolboxanim7');

            
        } else {
           
            if (img2) img2.classList.remove('analysis-anim');
            if (img4) img4.classList.remove('reportanim');
            if (img3) img3.classList.remove('workanim');
            if (img5) img5.classList.remove('usecaseanim');
            if (box1) box1.classList.remove('featureboxanim1');
            if (box2) box2.classList.remove('featureboxanim2');
            if (box3) box3.classList.remove('featureboxanim3');
            if (box4) box4.classList.remove('featureboxanim4');
            if (box5) box5.classList.remove('featureboxanim5');
            if (toolbox1) toolbox1.classList.remove('toolboxanim1');
            if (toolbox2) toolbox2.classList.remove('toolboxanim2');
            if (toolbox3) toolbox3.classList.remove('toolboxanim3');
            if (toolbox4) toolbox4.classList.remove('toolboxanim4');
            if (toolbox5) toolbox5.classList.remove('toolboxanim5');
            if (toolbox6) toolbox6.classList.remove('toolboxanim6');
            if (toolbox7) toolbox7.classList.remove('toolboxanim7');

         
        }
    });
}, { threshold: 0.1 }); 

document.querySelectorAll('.user-analysis-section , .image , .work-section , .use-case-img, .feature-line-1, .feature-line-2, .tools-line-1, .tools-line-2')
.forEach(section => observer.observe(section));

//----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let counterSections = document.querySelectorAll(
    ".logos-sections, .custom-reports-figure, .facts-figure-section, .client-figure-section"
  );
  let speed = 100;

  function startCounter(counter) {
    let target = +counter.dataset.target;
    let count = 0;
    let increment = target / speed;

    function update() {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    }

    update();
  }

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll("[data-target]").forEach(startCounter);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterSections.forEach((section) => observer.observe(section));
});

//------------------portfolio--------------------------

var portfoliosection1 = document.querySelector("#portfolio-setion-1");
var portfoliosection2 = document.querySelector("#portfolio-setion-2");
var portfoliosection3 = document.querySelector("#portfolio-setion-3");
var tab1 = document.querySelector(".tab1");
var tab2 = document.querySelector(".tab2");
var tab3 = document.querySelector(".tab3");

tab1.style.background = "#c6b9fb";

tab3.addEventListener("click", function () {
  portfoliosection1.style.display = "none";
  portfoliosection2.style.display = "none";
  portfoliosection3.style.display = "block";
  tab3.style.background = "#c6b9fb";
  tab2.style.background = "";
  tab1.style.background = "";
});

tab2.addEventListener("click", function () {
  portfoliosection1.style.display = "none";
  portfoliosection2.style.display = "block";
  tab2.style.background = "#c6b9fb";
  tab3.style.background = "";
  tab1.style.background = "";
  portfoliosection3.style.display = "none";
});

tab1.addEventListener("click", function () {
  portfoliosection1.style.display = "block";
  portfoliosection2.style.display = "none";
  portfoliosection3.style.display = "none";
  tab1.style.background = "#c6b9fb";
  tab3.style.background = "";
  tab2.style.background = "";
});

// ----------------accordions---------------------------

var plus = document.querySelector(".plus-img");
var accordiontext = document.querySelector(".accordiontext");
var plus2 = document.querySelector(".plus2");
var accordiontext2 = document.querySelector(".accordiontext2");
var plus3 = document.querySelector(".plus3");
var accordiontext3 = document.querySelector(".accordiontext3");
var plus4 = document.querySelector(".plus4");
var accordiontext4 = document.querySelector(".accordiontext4");
var plus5 = document.querySelector(".plus5");
var accordiontext5 = document.querySelector(".accordiontext5");

var flage = 0;

plus.addEventListener("click", function () {
  if (flage == 0) {
    accordiontext.style.display = "block";
    accordiontext2.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext4.style.display = "none";
    accordiontext5.style.display = "none";
    plus.style.transform = "rotate(45deg)";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 1;
  } else {
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext4.style.display = "none";
    accordiontext5.style.display = "none";
    plus.style.transform = "";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 0;
  }
});

plus2.addEventListener("click", function () {
  if (flage == 0) {
    accordiontext2.style.display = "block";
    plus2.style.transform = "rotate(45deg)";
    accordiontext.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext4.style.display = "none";
    accordiontext5.style.display = "none";
    plus.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 1;
  } else {
    accordiontext2.style.display = "none";
    accordiontext.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext4.style.display = "none";
    accordiontext5.style.display = "none";
    plus.style.transform = "";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 0;
  }
});

plus3.addEventListener("click", function () {
  if (flage == 0) {
    accordiontext3.style.display = "block";
    plus3.style.transform = "rotate(45deg)";
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext4.style.display = "none";
    accordiontext5.style.display = "none";
    plus2.style.transform = "";
    plus.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 1;
  } else {
    accordiontext3.style.display = "none";
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext4.style.display = "none";
    accordiontext5.style.display = "none";
    plus.style.transform = "";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 0;
  }
});

plus4.addEventListener("click", function () {
  if (flage == 0) {
    accordiontext4.style.display = "block";
    plus4.style.transform = "rotate(45deg)";
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext5.style.display = "none";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus.style.transform = "";
    plus5.style.transform = "";
    flage = 1;
  } else {
    accordiontext4.style.display = "none";
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext5.style.display = "none";
    plus.style.transform = "";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 0;
  }
});

plus5.addEventListener("click", function () {
  if (flage == 0) {
    accordiontext5.style.display = "block";
    plus5.style.transform = "rotate(45deg)";
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext4.style.display = "none";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus.style.transform = "";
    flage = 1;
  } else {
    accordiontext5.style.display = "none";
    accordiontext.style.display = "none";
    accordiontext2.style.display = "none";
    accordiontext3.style.display = "none";
    accordiontext4.style.display = "none";
    plus.style.transform = "";
    plus2.style.transform = "";
    plus3.style.transform = "";
    plus4.style.transform = "";
    plus5.style.transform = "";
    flage = 0;
  }
});
