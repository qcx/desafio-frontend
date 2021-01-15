const linkRepo = document.getElementById("linkRepo")

linkRepo.addEventListener("click", async () => {
    /* LIMPANDO DIV
    limpa div container caso haja uma anterior (busca anterior) */
    let div = document.getElementById("repo")
    if (div != null) {
         div.parentNode.removeChild(div)
    } 

    const user = 'allankildare'
    const url = `https://api.github.com/users/${user}/repos`
    let repos = await fetch(url)
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
    padding: 12px 0 15px 10px;`

    for (repo of repos) {
        let name = document.createElement("p")
        name.textContent = repo.name
        newDiv.appendChild(name)
    }
    devRepo.appendChild(newDiv)
    console.log(repos)
})