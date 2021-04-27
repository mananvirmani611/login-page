

$("#login-button").on("click", function(){
  var username = $("#email").val();
  var password = $("#password").val();

  if(username === "asdfghjkl" && password === "qwertyuiop"){
    // window.location.replace("http://stackoverflow.com");
    $(document).ready(function(){
    var url = "https://chiragg2101.github.io/rancike/";
    $(location).attr('href', url); // Using this
});
  }
  else{
    alert("Wrong credentials entered!");
  }
})
