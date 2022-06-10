const colors = [];
const numBalls = 100;
const balls = [];
let bloc = document.createElement("div");
bloc.style.width = "98vw";
bloc.style.height = "100vh";
bloc.style.position = "fixed";
bloc.style.left = "25px";
bloc.style.top = "29px";
bloc.style.opacity = "0.7"
bloc.style.zIndex = "-1";

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() *  colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 70)}vh`;
      ball.style.transform = `scale(${(0.7)})`;
      ball.style.width = `${'1'}em`;
      ball.style.height = ball.style.width;
      balls.push(ball);
      document.body.appendChild(bloc).append(ball);
}
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 20),
    y: Math.random() * 20
  };
  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


  // fond music 

  function add_line() {
    let line = document.createElement("audio");
    let head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="dorime.mp3";
    line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
    head.appendChild(line);
}

if(document.getElementById('bgSong')==null){
 add_line();
let audio = document.getElementById('bgSong');
audio.volume = 0.5;
}