/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoExc = Math.floor(Math.random() * who.length);
  let actionExc = Math.floor(Math.random() * action.length);
  let whatExc = Math.floor(Math.random() * what.length);
  let whenExc = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoExc] +
    " " +
    action[actionExc] +
    " " +
    what[whatExc] +
    " " +
    when[whenExc];
  return excuse;
};
