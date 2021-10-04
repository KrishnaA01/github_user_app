// fetch using dot then syntax
// https://api.github.com/users/example

async function mainFunc(user){
    const button = document.querySelector('.btn')
    const input = document.querySelector('.search')
    
    const url = `https://api.github.com/users/${user}`
    const response = await fetch(url)
    const data = await response.json()
    //profile img
    const img = document.querySelector(".profile_pic")
    img.src = data.avatar_url

    const userName = document.querySelector(".username")
    userName.innerText = data.name;
    const usertag = document.querySelector(".usertag")
    usertag.innerText = `@${data.login}`;

    /** date */
    
    let joinedDate = new Date (data.created_at)
    joinedDate = (joinedDate.toJSON().substring(0,10));

    const joined = document.querySelector(".joined")
    joined.innerText= joinedDate;

    const bio = document.querySelector(".bio")
    bio.innerText = data.bio
    //STAT SECTION

    const repo = document.querySelector(".repos")
    repo.innerText= `Repositories 
    ${data.public_repos}`
    const followers = document.querySelector(".followers")
    followers.innerText= `Followers 
    ${data.followers}`
    const following = document.querySelector(".following")
    following.innerText= `Following 
    ${data.following}`
    //Footer
    const location = document.querySelector(".location")
    location.innerText = `${data.location}`
    const twitter = document.querySelector(".tweet")
    twitter.innerText = data.twitter_username
    const externalLink = document.querySelector(".link")
    externalLink.innerText = "https://MusaPalace.com"
    const organization = document.querySelector(".org")
    organization.innerText = "DCI"
    

   button.addEventListener("click", ()=> mainFunc(input.value))

   input.addEventListener("keypress", (e) => {
       if (e.key === "Enter") {
           mainFunc(input.value)
           input.value= "";
       }
   })
   
}


mainFunc("N-Musa")

let sunImg = document.querySelector(".sun-img");
sunImg.addEventListener("click",function(){
    document.body.classList.toggle("bright-theme");
    if (document.body.classList.contains("bright-theme")){
        sunImg.src = "/images/moon-svgrepo-com.svg";
    } else {
        sunImg.src = "/images/sun-svgrepo-com.svg";
    }
})

       
        
        

        
        
   
  







