

async function getUser() {
  try {
    
    const user = 'cinthiadepaula'
    
    const { data } = await axios.get(
      `https://api.github.com/users/${user}`
    );
    const repositories = document.getElementById("repositories");
    const followers = document.getElementById("followers");
    const following = document.getElementById("following");
    const avatar = document.getElementById("avatar");
    const url = document.getElementById('challenge_button');
    
    
    repositories.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;
    avatar.innerHTML = `<img src='${data.avatar_url}'/>`
    url.innerHTML=`<a target="_blank" href="${data.html_url}">VISITAR PERFIL</a>`
    
    const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
        
        const responseData = response.data      
        let repos = '';
        responseData.forEach(responseData => {
           repos += `<div class="list_repos"><a href="${responseData.html_url}" target="_black">${(responseData.name).toUpperCase()}</a></div>`
            
            
        })
        document.getElementById('repos').innerHTML = repos;  
  
         
  } catch (error) {
    console.log(error);
  }
}

getUser()

