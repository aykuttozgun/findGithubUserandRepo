
const githubform=document.querySelector("#github-form");
const ınputName=document.querySelector("#githubname");
const clearLastUsers=document.querySelector("#clear-last-users");

const github=new Github();
const ui=new UI();
const storage=new Storage();
eventListeners();



function eventListeners(){

    githubform.addEventListener("submit",findGithubUsers);
    
    document.addEventListener("DOMContentLoaded",getAllUser);

    clearLastUsers.addEventListener("click",clearAllUsers);

}



function findGithubUsers(e){

    const username=ınputName.value.trim();

    if(username===""){

        alert("Lütfen geçerli bir kullanıcı giriniz.")
    }

    else{
        github.getData(username)
    .then(response => {

        if(response.user.message==="Not Found") {
            
            console.log("hata")
            ui.alertMessage("Kullanıcı Bulunamadı!!","danger");
        
        }

        else{

            ui.addToUserToUI(username);
            Storage.addUserToStorage(username);
            ui.showUserInfo(response.user);
            ui.showUserRepo(response.repo);
            ui.alertMessage("Kullanıcı Bulundu..","success");
        }

        

    })
    .catch(err => ui.alertMessage(err))

    }

    ui.clearInput();


    e.preventDefault();
}

function getAllUser(){

    let users=Storage.getUserFromStorage();

    

    users.forEach((user)=>{
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent=user;
            
            ui.lastUsers.appendChild(li);

    })
}


function clearAllUsers(){

    Storage.clearAllUserFromStorage();
    ui.clearAllUsersToUI();
}