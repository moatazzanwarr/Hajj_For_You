let hajj_btn = document.querySelector("#hajj_btn").classList;
let umrah_btn = document.querySelector("#umrah_btn").classList;
/////////////////////////////////////////////////////////////////
let hajj = document.querySelector("#hajj").style;
let umrah = document.querySelector("#umrah").style;


function hajj_open(){
    hajj_btn.add("bg-green-400");
    umrah_btn.remove("bg-green-400");
    ///////////////////////////////////
    hajj.display = "block";
    umrah.display = "none";
}

function umrah_open(){
    hajj_btn.remove("bg-green-400");
    umrah_btn.add("bg-green-400");
    ///////////////////////////////////
    hajj.display = "none";
    umrah.display = "block";
}