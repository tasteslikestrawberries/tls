// Below function Executes onclick of login button.
function validate(event){
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
if ( username === "formget" && password === "1234"){
    alert ("Login successful!");
window.location = "shop.html"; // Redirecting to other page.

event.stopPropagation();
event.preventDefault();

}
else
{ 
alert("Login unsuccessful!")
;
}

}

