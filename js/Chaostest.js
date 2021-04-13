const texts = document.getElementsByClassName("chaosText smaller");
const container = document.querySelector(".smallerContainer");
const bigContainer = document.getElementById("bigContainer");

const minor = document.getElementById("minor");
const major = document.getElementById("major");
const mega = document.getElementById("mega");

const stretch = document.getElementById("stretch");
const step = document.getElementById("step");
const leap = document.getElementById("leap");

const evolution = document.getElementById("evolution");
const disruption = document.getElementById("disruption");
const invention = document.getElementById("invention");

// const Ptop = ["10%", "43%", ""];
const Pleft = ["0%", "12%", "24%", "36%", "48%", "60%", "72%", "84%", "90%"];

let TcurrentItem = 0;
let LcurrentItem = 0;

console.log(texts.length);

// texts.addEventListener("load", chaosFunction());
var id = null;

function chaosFunction() {

    clearInterval(id);
    id = setInterval(chaos, 1000);

    function chaos() {
        for (i = 0; i < texts.length; i++) {
            TcurrentItem = Math.floor(Math.random() * 100);
            texts[i].style.top = TcurrentItem + "%";
        }
        for (i = 0; i < texts.length; i++) {

            LcurrentItem = Math.floor(Math.random() * Pleft.length);

            texts[i].style.left = Pleft[LcurrentItem];
        }
    }
}


container.onmouseenter = function() {
    clearInterval(id);
    setTimeout(function() {
        minor.style = "top:10%; left:0%; transition:2s;";
        major.style = "top:10%; left:47%; transition:2s;";
        mega.style = "top:10%; right:0%; transition:2s;";

        stretch.style = "top:43%; left:0%; transition:2s;";
        step.style = "top:43%; left:48%; transition:2s;";
        leap.style = "top:43%; right:0%; transition:2s;";

        evolution.style = "left:0%; transition:2s;";
        disruption.style = "left:45%; transition:2s;";
        invention.style = "right:0%; transition:2s;";
    }, 1000);
}
document.addEventListener('scroll', function() {
    clearInterval(id);
    setTimeout(function() {
        minor.style = "top:10%; left:0%; transition:2s;";
        major.style = "top:10%; left:47%; transition:2s;";
        mega.style = "top:10%; right:0%; transition:2s;";

        stretch.style = "top:43%; left:0%; transition:2s;";
        step.style = "top:43%; left:48%; transition:2s;";
        leap.style = "top:43%; right:0%; transition:2s;";

        evolution.style = "left:0%; transition:2s;";
        disruption.style = "left:45%; transition:2s;";
        invention.style = "right:0%; transition:2s;";
    }, 300);
});






// forEach donenot work in this case
// texts.array.forEach(element => {
//     texts.addEventListener("onload", function(e) {
//         TcurrentItem = Math.floor(Math.random() * Ptop.length);
//         LcurrentItem = Math.floor(Math.random() * Pleft.length)
//         texts[e].style.top = Ptop[TcurrentItem];
//         e.element.style.left = Pleft[LcurrentItem];
//     })
// });

//     function myFunction() {
//         let TcurrentItem = 0;
//         let LcurrentItem = 5;
//         minor.style.color = "#2196F3";
//         minor.style.top = Ptop[TcurrentItem];
//         stretch.style.top = "43%";
//         stretch.style.left = Pleft[LcurrentItem];
// 
//     }