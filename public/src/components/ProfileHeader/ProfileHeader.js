import Button from '../shared/Button/Button.js';

const ProfileHeader = (userInfo) => {

    var parent = document.getElementsByClassName('profileHeader')[0];

    var profileData = document.createElement('div');
    profileData.classList.add('profileData')
    parent.appendChild(profileData);

    var profileIntro = document.createElement('div');
    profileIntro.classList.add('profileIntro');
    parent.appendChild(profileIntro);
    
    var profileImg = document.createElement('img');
    profileImg.setAttribute('src', `${userInfo[1]}`)
    profileImg.setAttribute('alt', `Foto do rosto do usuário encontrado`)
    profileIntro.appendChild(profileImg);

    var userLink = document.createElement('a');
    userLink.classList.add('userLink')
    userLink.setAttribute('href', `${userInfo[2]}`)
    profileIntro.appendChild(userLink);

    var hrefName = document.getElementsByClassName('userLink')[0];

    var userName = document.createElement('h4');
    userName.textContent = `${userInfo[0]}`
    hrefName.appendChild(userName);

    userInfo.filter(function(el) {

        if(userInfo.indexOf(el) >= 3){

           let h4 = document.createElement('h4');
           h4.textContent = `${el}`
           h4.id = `${userInfo.indexOf(el)}`;
 
           if(h4.id == 3){ h4.textContent += ' seguidores' }
 
           if(h4.id == 4){ h4.textContent += ' seguindo' }

           if(h4.id == 5){ h4.textContent += ' repositórios' }

           profileData.appendChild(h4);
        }
    });

    Button();
};

export default ProfileHeader;