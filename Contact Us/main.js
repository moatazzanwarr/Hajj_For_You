// let hajj_btn = document.querySelector("#hajj_btn").classList;
// let umrah_btn = document.querySelector("#umrah_btn").classList;
// /////////////////////////////////////////////////////////////////
// let hajj = document.querySelector("#hajj").style;
// let umrah = document.querySelector("#umrah").style;


// function hajj_open(){
//     hajj_btn.add("bg-green-400");
//     umrah_btn.remove("bg-green-400");
//     ///////////////////////////////////
//     hajj.display = "block";
//     umrah.display = "none";
// }

// function umrah_open(){
//     hajj_btn.remove("bg-green-400");
//     umrah_btn.add("bg-green-400");
//     ///////////////////////////////////
//     hajj.display = "none";
//     umrah.display = "block";
// }

// Send Email 
function sendEmail(){
    Email.send({
    SecureToken : "78e4cf10-e6d6-469d-a97a-2b3a259bfea8",
    To : 'mohamedmoataz328@gmail.com',
    From : "mohamedmoataz328@gmail.com",
    Subject : "Test Email",
    Body : "Name: " + document.getElementById("name").value
            + "</br> Email:  " + document.getElementById("email").value
            + "</br> Mobile Phone:  " + document.getElementById("mobile").value
            + "</br> Country:  " + document.getElementById("country").value
            + "</br> Message:  " + document.getElementById("message").value
    }).then(
    message => alert("message sent succesfully")
    );
    console.log("send");
}