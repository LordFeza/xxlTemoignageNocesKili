//Nav : adaptation de la couleur du menu en fonction de la couleur du background
const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    /*30px*/
    navigation.classList.add("anim-nav");
  } else navigation.classList.remove < o("anim-nav");
});

// ===========================================
// -------Typewriter effect-------

let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString("20 couples. ")
  .pauseFor(300)
  .typeString("1 objectif : le Kilimanjaro !")
  .pauseFor(1000)
  .deleteChars(29)
  .typeString(
    // #9013FE rgb(255, 255, 128)
    '1 promesse : <span style="color:#6600cc;">S\'aimer 20 ans de plus </span>!'
  )
  .pauseFor(1000)
  .deleteChars(37)
  .typeString(
    // orange
    '1 envie fun : <span style="color:hsl(30, 100%, 50%);">Un tea time au sommet </span>!'
  )
  .pauseFor(1000)
  .deleteChars(37)
  .typeString(
    // framboise
    '1 projet réalisé avec<span style="color:#E91E63;"> xxl activated </span>!'
  )
  .pauseFor(1000)
  .deleteChars(37)
  .typeString(
    // lime #27ae60
    'Ils partagent avec nous <span style="color:#33cc00;">leurs stories </span>!'
  )
  .pauseFor(1000)
  .start();
