// Below function Executes on click of login button.
function validate(){
var username = document.getElementByName("Username").value;
var password = document.getElementByName("Password").value;
if ( username == "formget" && password == "1234"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
