import ProfileHeader from '../components/ProfileHeader/ProfileHeader.js';

async function getUserData() {

    const res = await fetch('https://api.github.com/users/marianasmmattos');
    const json = await res.json();
    
    const userInfo = [
        json.login, 
        json.avatar_url,
        json.html_url,
        json.followers,
        json.following,
        json.public_repos
    ];

    ProfileHeader(userInfo);
};

export default getUserData(ProfileHeader);