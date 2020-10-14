require('../styles/index.css')
(function(){

    const url = "https://api.github.com/users";
    const profileTag = document.getElementById("profile")
    
    async function getUsers(user){

        const profileResponse = await fetch(`${url}/${user}`)
        const repoResponse = await fetch(`${url}/${user}/repos`)
        const starredResponse = await fetch(`${url}/${user}/starred`) 
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()
        const starred =  await starredResponse.json()
        return {profile, repos, starred}
    }

    function showProfile(user){
        console.log(user)
        profileTag.innerHTML = `
            <div id="git-data-container">
                <div id="git-data-leftside">
                    <img id="github-avatar" src="${user.avatar_url}" width="150px" height="150px" style="border-radius:100%"/>
                </div>

                <div id="git-data-rightside">
                        <p id="Repositories">Repositorios: ${user.public_repos} </p>
                        <p id="Followers">Seguidores: ${user.followers}</p>
                        <p id="Following">Seguindo: ${user.following}</p>
                            <div id="repos-container"></div>
                            <div id ="stars-container"></div>
                </div>
            </div>
        `;
    }

    function showRepos(repos){
        let output="";
        repos.forEach(repo => {
            output +=  `
                <ul style="list-style-type:none">
                    <li>${repo.name}</li>
                </ul>
            `
        })
        document.getElementById("repos-container").innerHTML = output
    }

    function showStarred(starred){
        let output="";
        starred.forEach(star => {
            output +=  `
                <ul style="list-style-type:none">
                    <li>${star.full_name}</li>
                </ul>
            `
        })
        document.getElementById("stars-container").innerHTML = output
    }
 
    const search = document.getElementById("buscar-usuario")
    search.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){ 
            const user = e.target.value
            if(user.length > 0){
                getUsers(user)
                .then(res => {
                    showProfile(res.profile);
                    showRepos(res.repos);
                    showStarred(res.starred)
                })
            }
        }
    })
})()
    


  