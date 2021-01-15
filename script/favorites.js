const linkFav = document.getElementById("linkFav")

linkFav.addEventListener("click", async () => {
    let div = document.getElementById("repo")
    if (div != null) {
        div.parentNode.removeChild(div)
    }

    const user = 'allankildare'
    const url = `https://api.github.com/users/${user}/starred`

    let favorites = await fetch(url)
        .then(res => {
            const req = res.json()
            return req
        })

    const devRepo = document.getElementById("devRepo")
    let newDiv = document.createElement("div")
    newDiv.className = "repo-req"
    newDiv.id = "repo"
    newDiv.style = `height: 200px;
    overflow-y: scroll;
    width: 100%;
    padding: 15px 0 15px 10px;`

    for (favorite of favorites) {
        let name = document.createElement("p")
        name.textContent = favorite.name
        newDiv.appendChild(name)
    }
    devRepo.appendChild(newDiv)

})