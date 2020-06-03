

class UI{

    constructor(){

        this.profileDiv=document.querySelector("#profile");
        this.repoDiv=document.querySelector("#repos");
        this.lastUsers=document.querySelector("#last-users");
        this.inputField=document.querySelector("#githubname");
        this.alert=document.querySelector(".search.card.card-body");
        
        
    
    }

    clearInput(){
        this.inputField.value="";
    }

    addToUserToUI(username){

        let users=Storage.getUserFromStorage();
        console.log("deneme")
        if(users.indexOf(username)===-1){
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent=username;
            
            this.lastUsers.appendChild(li);

            console.log("deneme")

        }
        

      
        
        
    }

    showUserRepo(repo){

        this.repoDiv.innerHTML="";

        repo.forEach(element => {
            this.repoDiv.innerHTML +=` <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2"> 
                <a href="${element.html_url}" target = "_blank" id = "repoName">${element.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${element.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork">${element.forks_count}</span>
                    </button>
            
                </div>
            </div>

        </div> 

`;
        });
       
    }

    alertMessage(message,status){

        console.log(this.alert)

        const div=document.createElement("div");

        div.className="alert alert-"+status;

        div.textContent=message;


        this.alert.appendChild(div);

        setTimeout(()=>{
            div.remove();
        },2000);

    }

    showUserInfo(user){

        this.profileDiv.innerHTML=` <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div> `
    }

    clearAllUsersToUI()
    {

        console.log("clear")
        while(this.lastUsers.firstElementChild !==null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }
}