

class Storage{

    constructor(){
        
    }

    static getUserFromStorage(){


        let array;

        if(localStorage.getItem("user")===null){

            array=[];
        }
        else{
            array=JSON.parse(localStorage.getItem("user"));
        }

        return array;
    }

    static addUserToStorage(username){

        let users=this.getUserFromStorage();

        if(users.indexOf(username)===-1){
            users.push(username);
        }
        
        localStorage.setItem("user",JSON.stringify(users));

    }

    static clearAllUserFromStorage(){

        localStorage.removeItem("user");
    }
}