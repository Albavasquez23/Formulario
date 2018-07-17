var LoginApi = (function(){

    //TODO: BASE_URL
    var baseurl = "http://192.168.200.108:8080";       
    var PATH    = "/login"; 
    var PATH_REGISTER ="/register";
    var PATH_LOGOUT ="/logout";

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
listpost: function(token)
{
    
}
    }
})();