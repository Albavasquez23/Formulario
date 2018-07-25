var LoginApi = (function(){

    //TODO: BASE_URL
    var baseurl = "http://localhost:8080";       
    var PATH    = "/login"; 
    var PATH_REGISTER ="/register";
    var PATH_LOGOUT ="/logout";
    var PATH_POST ="/post";

     return {
         login: function(email, password){
             return new Promise(function(resolve, reject){
                var ld = {
                    email: email,
                    password: password
                }
              
                $.ajax ({
                    method: 'POST',
                    data: JSON.stringify(ld),
                    url: baseurl+PATH,
                    success: function (data){
                        resolve(data);
                    },
                    error: function(error){
                        reject(error);
                    }
                });

            });
         },
         register: function(email, password, name){
            return new Promise(function(resolve, reject){
               var ld = {
                   email: email,
                   password: password,
                   name: name
               }
    
               $.ajax ({
                   method: 'POST',
                   data: JSON.stringify(ld),
                   url: baseurl+PATH,
                   success: function (data){
                       resolve(data);
                   },
                   error: function(error){
                       reject(error);
                   }
               });

           });
        },
        logout: function(token){
            return new Promise(function(resolve, reject)
            {
                $.ajax({
                    method: "DELETE",
                    headers: {'Authorization': 'Bearer '+ token},
                    url: baseurl+PATH_LOGOUT,
                    success: function(data){
                        resolve(data);
                
                    },
                    error: function(error){
                        reject(error);

                    }
                        
                })   
    });

},
MostrarPost: function(token){
    return new Promise(function(resolve, reject)
    {
        $.ajax({
            method: "GET",
            headers: {'Authorization': 'Bearer '+ token},
            url: baseurl+PATH_POST,
            success: function(data){
                data.forEach(element => {
                    $.tmlp("<div class='container'><table><td><a href:'comentar.html'><h3 onclick='comentar(this);' id='"+element.id+"'>"+ element.title +"</h3></a> <p>By: "+ element.id +" ("+  +")</p> "+ element.body+"</td></table><hr style='color: #0056b2;'></div>").appendTo("#posteos");
                    
                });
        
            },
            error: function(error){
                reject(error);

            }
                
        })   
});

},

    }
})();