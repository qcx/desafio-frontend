import getUserData from '../../services/apiUserData.js'

const Challenge = () => {

    var sectionChallenge = document.createElement('section');
    sectionChallenge.classList.add('challenge');
    sectionChallenge.id ='challenge';
    document.body.appendChild(sectionChallenge);

    var challenge = document.getElementById('challenge');

    var sectionProfile = document.createElement('div');
    sectionProfile.classList.add('profile');
    challenge.appendChild(sectionProfile);

    var profile = document.getElementsByClassName('profile')[0];

    var profileHeaderDiv = document.createElement('div');
    profileHeaderDiv.classList.add('profileHeader');
    profile.appendChild(profileHeaderDiv);

    var list = document.createElement('div');
    list.classList.add('repos');
    sectionProfile.appendChild(list);

    getUserData;

};

export default Challenge;