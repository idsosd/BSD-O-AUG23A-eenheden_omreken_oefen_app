const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let index_left = 0; 
let index_right = 0;

let dim_select = document.getElementById("dim_select");

let inp_left = document.getElementById("inp_left");
let eenh_left = document.getElementById("eenh_left");

let inp_right = document.getElementById("inp_right");
let eenh_right = document.getElementById("eenh_right");

let opgave_float = 3.14;


function makeProblem()
{
    //alert("makeProblem doet het " + eenheden[index_left]);
    index_left = Math.floor(Math.random() * 7);
    index_right = Math.floor(Math.random() * 7);

    eenh_left.innerHTML = eenheden[index_left] + "<sup>" + dim_select.value + "</sup>";
    eenh_right.innerHTML = eenheden[index_right] + "<sup>" + dim_select.value + "</sup>";

    opgave_float = (Math.random() * 1000).toFixed(3);
    inp_left.value = opgave_float;
}

function checkSolution()
{
    //alert("checkSolution doet het");
    //eerst het juiste antwoord berekenen
    let factor = 10;
    if( dim_select.value > 1 ){
 
        factor = Math.pow(10, dim_select.value);
    }
    alert("de factor = " + factor);
}