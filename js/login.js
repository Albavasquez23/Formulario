
function isValidToken(){
  var token = window.localStorage.getItem("token");
  console.log(token);
  if (token === null){
    console.log("es null");
    return null;
  }

    if (token === undefined){
      console.log("es undefined");
      return null;
    }

    if (token === 'undefined'){
      console.log("es undefined");
      return null;
    }

    return token;
}

function login(){
  var email = $("#email").val();
  var password = $("#password").val();

  LoginApi.login(email, password)
    .then(function(response){
      console.log("Successfull: ", response);
      var token = response.token;
      window.localStorage.setItem("token", token);
      window.location = "index.html"
      //TODO: registrar el token en local storage
      // TODO debemos redirecionar a index
    })
    .catch(function(error){
      console.log("Error: ", error);
    })
}

function register(){
  var name = $("#name").val();
  var email = $("#email").val();

  var password = $("#password").val();
  var password2 = $("#password2").val();

  if (password != password2){
    alert ("contraseña no coinciden");
    return
  }
  


  LoginApi.register(email, password, name)
    .then(function(response){
      console.log("Successfull: ", response);
     login();
      //TODO: registrar el token en local storage
      // TODO debemos redirecionar a index
    })
    .catch(function(error){
      console.log("Error: ", error);
    })
}


window.onload = function(){
  // TODO: validar si existe un token mandrlo al index.
  var token = isValidToken();
  if (token != null){
    // validar que este activo.
    window.location ="index.html"; 
  //console.log(token);  
    //console.log("El token es nulo");
  }


  $("#btn-login").click(function(){
    login();
  });

  $("#btn-register").click(function(){
    register();
  });
}

