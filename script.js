function Asake(){
 var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
   {
    if(email.trim()==""&& password==""){
        alert("No record found")
      return  false
    }
    else if (email=="fagbamilaolumide@gmail.com"&&password=="Felix"){
        alert("welcome user") 
      return  true   
 }
else{
    alert("Invalid")
    return false
}
    }
   }
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function Felix() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}