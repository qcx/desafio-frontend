const devDiv = document.getElementById("devRepo")
devDiv.addEventListener("load", reqGitHub())

async function reqGitHub() {
    const user = 'allankildare'
    const url = `https://api.github.com/users/${user}`

    let response = await fetch(url)
        .then(res => {
            const req = res.json()
            return req
        })

    const img = document.getElementById("image")
    img.src = response.avatar_url
    img.alt = `Foto de perfil de ${response.name}` // texto alternativo
    
    const profile = document.getElementById("profile")
    profile.href = response.html_url

    const repoData = document.getElementById("repoData")
    
    let repositories = document.createElement("p")
    repositories.innerHTML = `Repositórios: ${response.public_repos}`
    repoData.appendChild(repositories)

    let followers = document.createElement("p")
    followers.innerHTML = `Seguidores: ${response.followers}`
    repoData.appendChild(followers)

    let following = document.createElement("p")
    following.innerHTML = `Seguidores: ${response.following}`
    repoData.appendChild(following)

    console.log(response)
}
