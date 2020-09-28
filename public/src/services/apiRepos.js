import RepoList from '../components/RepoList/RepoList.js';

async function getRepos() {

    const res2 = await fetch('https://api.github.com/users/marianasmmattos/repos');
    const json2 = await res2.json();

    var userRepos = [];

    json2.forEach(item => {
        userRepos.push(item.name);
    });

    RepoList(userRepos);
};

export default getRepos;