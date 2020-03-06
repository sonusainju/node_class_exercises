let passObj={
    username:null,
    password:null,
    greet: function(){
        if(this.username!=null)
            console.log(`Hello, I'm user ${this.username}`);
        else
            console.log("Please assign a username value");
    },
    
    updaterUsername: function(inputString){
        this.username = inputString;
    },

    updatePassword: function(inPassword)
    {
        this.password = inPassword
    }

};

passObj.greet();
passObj.updaterUsername("sonu");
passObj.greet();