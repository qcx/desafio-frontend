import getFavs from '../../../services/apiFavs.js';
import getRepos from '../../../services/apiRepos.js';

const Button = () => {

    var data = [
        {
            txt: 'Ver repositórios',
            id: 'repositorios'
        },
        {
            txt: 'Ver favoritos',
            id: 'favoritos'
        }
    ];

    const createButton = () => {
        var profileData = document.getElementsByClassName('profileData')[0];
        var btns = `<div class="button">`;

        data.forEach(item => {
            var btn = `<button id="${item.id}" class="profileBtn">${item.txt}</button>`;
            btns += btn;
        });

        btns += `</div>`;
        profileData.innerHTML += btns;
    };

    createButton();
   
    var btnFav = document.getElementById('favoritos');
    var btnRepo = document.getElementById('repositorios');

    btnFav.addEventListener('click', function() {
        getFavs();
    });

    btnRepo.addEventListener('click', function() {
        getRepos();
    });
};

export default Button;