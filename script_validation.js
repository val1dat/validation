//Валидация данных (3)
	function validate(form) {
      var name = document.getElementById("name");
      var password = document.getElementById("password");
      var password2 = document.getElementById("password2");
      var message = document.getElementById("message");
      if(!name.value){
        name.style.border="2px solid red";
        Nname.style.display="block";
        Nname.style.color="red";
        //return false;
      }
      if(name.value){Nname.style.display="none";
      name.style.border="1px solid grey";}

      
     

      if(!password.value){
        password.style.border="2px solid red";
        Npassword.style.display="block";
        Npassword.style.color="red";
        //return false;
      }
      if(password.value){
        password.style.border="1px solid grey";
        Npassword.style.display="none";
        eq.style.display="none";
        eq.style.color="red";
      }
      if(password.value!=password2.value){
        password.style.border="2px solid red";
        Npassword.style.display="none";
        eq.style.display="block";
        eq.style.color="red";
      }
      if(message.value){
        message.style.border="1px solid grey";
        Nmessage.style.display="none";
        Nmessage.style.color="red";
      }
      
      if(!message.value){
        message.style.border="2px solid red";
        Nmessage.style.display="block";
        Nmessage.style.color="red";
        return false;
      }
      return true;
    }

$(document).ready(function(){
    

    $(".submit").click(function(event){
    event.preventDefault();

    var email=$(".email").val();
    var subject=$(".subject").val();
    var message=$(".message").val();
    var statusElm = $('.status');
    statusElm.empty();

    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test(email);
    if (valid && email.length >= 6) statusElm.append('<span>Email is valid</span>');
    else statusElm.append('<span>Email isnt valid</span>');
    
    if(subject.length >2){
      statusElm.append('<span>Email is valid</span>');
    }else{
      statusElm.append('<span>Email isnt valid</span>');
    }
    if(message.length >20){
      statusElm.append('<span>Email is valid</span>');
    }else{
      statusElm.append('<span>Email isnt valid</span>');
    }
    return valid;
    })

});