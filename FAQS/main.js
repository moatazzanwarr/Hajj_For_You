let general_1 = document.querySelector("#general_1");
let general_2 = document.querySelector("#general_2");
let general_3 = document.querySelector("#general_3");
let general_4 = document.querySelector("#general_4");
let general_5 = document.querySelector("#general_5");
let general_6 = document.querySelector("#general_6");

//////////////////////////


function openGeneral_1(){
    general_1.classList.toggle('h-auto');
}
function openGeneral_2(){
    general_2.classList.toggle('h-auto');
}
function openGeneral_3(){
    general_3.classList.toggle('h-auto');
}
function openGeneral_4(){
    general_4.classList.toggle('h-auto');
}
function openGeneral_5(){
    general_5.classList.toggle('h-auto');
}
function openGeneral_6(){
    general_6.classList.toggle('h-auto');
}

///////////////////////////////////////////


let generalAll = document.querySelector("#generalAll").style;
let permissibilityAll = document.querySelector("#permissibilityAll").style;
let processAll = document.querySelector("#processAll").style;
let paymentAll = document.querySelector("#paymentAll").style;
let supportAll = document.querySelector("#supportAll").style;
let miscellaneousAll = document.querySelector("#miscellaneousAll").style;

/////////////////////////////////////////////
// change background

let general = document.querySelector("#general").classList;
let permissibility = document.querySelector("#permissibility").classList;
let process = document.querySelector("#process").classList;
let payment = document.querySelector("#payment").classList;
let support = document.querySelector("#support").classList;
let miscellaneous = document.querySelector("#miscellaneous").classList;


function GeneralClear(){
    generalAll.height = "auto";
    permissibilityAll.height = "0";
    processAll.height = "0";
    paymentAll.height = "0";
    supportAll.height = "0";
    miscellaneousAll.height = "0";

        // /////////////////////
        general.add("bg-green-400")
        permissibility.remove("bg-green-400")
        process.remove("bg-green-400")
        payment.remove("bg-green-400")
        support.remove("bg-green-400")
        miscellaneous.remove("bg-green-400")
}

function PermissibilityClear(){
    generalAll.height = "0";
    permissibilityAll.height = "auto";
    processAll.height = "0";
    paymentAll.height = "0";
    supportAll.height = "0";
    miscellaneousAll.height = "0";

    // /////////////////////
    general.remove("bg-green-400")
    permissibility.add("bg-green-400")
    process.remove("bg-green-400")
    payment.remove("bg-green-400")
    support.remove("bg-green-400")
    miscellaneous.remove("bg-green-400")
}

function Process(){
    generalAll.height = "0";
    permissibilityAll.height = "0";
    processAll.height = "auto";
    paymentAll.height = "0";
    supportAll.height = "0";
    miscellaneousAll.height = "0";

        // /////////////////////
        general.remove("bg-green-400")
        permissibility.remove("bg-green-400")
        process.add("bg-green-400")
        payment.remove("bg-green-400")
        support.remove("bg-green-400")
        miscellaneous.remove("bg-green-400")
}

function Payment(){
    generalAll.height = "0";
    permissibilityAll.height = "0";
    processAll.height = "0";
    paymentAll.height = "auto";
    supportAll.height = "0";
    miscellaneousAll.height = "0";

        // /////////////////////
        general.remove("bg-green-400")
        permissibility.remove("bg-green-400")
        process.remove("bg-green-400")
        payment.add("bg-green-400")
        support.remove("bg-green-400")
        miscellaneous.remove("bg-green-400")
}

function Support(){
    generalAll.height = "0";
    permissibilityAll.height = "0";
    processAll.height = "0";
    paymentAll.height = "0";
    supportAll.height = "auto";
    miscellaneousAll.height = "0";

        // /////////////////////
        general.remove("bg-green-400")
        permissibility.remove("bg-green-400")
        process.remove("bg-green-400")
        payment.remove("bg-green-400")
        support.add("bg-green-400")
        miscellaneous.remove("bg-green-400")
}

function Miscellaneous(){
    generalAll.height = "0";
    permissibilityAll.height = "0";
    processAll.height = "0";
    paymentAll.height = "0";
    supportAll.height = "0";
    miscellaneousAll.height = "auto";

        // /////////////////////
        general.remove("bg-green-400")
        permissibility.remove("bg-green-400")
        process.remove("bg-green-400")
        payment.remove("bg-green-400")
        support.remove("bg-green-400")
        miscellaneous.add("bg-green-400")
}