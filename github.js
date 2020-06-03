
class Github{

    constructor(){
        this.apikey="https://api.github.com/users/";
        this.repo="/repos";
    }

    async getData(username){

        const responseUser=await fetch(this.apikey+username);
        const userJson=await responseUser.json();
        const responseRepo=await fetch(this.apikey+username+this.repo);
        const repoJson=await responseRepo.json();

        return {
            user:userJson,
            repo:repoJson
        }
        
    }
}