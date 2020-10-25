import {gitHub_url}  from '../assets/url_base/url_base.config';


      function buscarUsuario(profileName){

        const endpoint = '/users/';
        const url_endpoint = gitHub_url.concat(endpoint,profileName);

        let req = new XMLHttpRequest();
        req.open('GET',url_endpoint,true);
        req.setRequestHeader("Content-Type","application/json");
     
        return req;

    }

    function buscarRepositorios(profileName){
        
        const endpoint = `/users/${profileName}/repos`;
        const url_endpoint = gitHub_url.concat(endpoint);

        let req = new XMLHttpRequest();
        req.open('GET',url_endpoint,true);
        req.setRequestHeader("Content-Type","application/json");
     
        return req;
    }

    function buscarRepositoriosFavoritos(profileName){
        
        const endpoint = `/users/${profileName}/starred`;
        const url_endpoint = gitHub_url.concat(endpoint);

        let req = new XMLHttpRequest();
        req.open('GET',url_endpoint,true);
        req.setRequestHeader("Content-Type","application/json");
     
        return req;

    }

export {buscarUsuario,buscarRepositorios,buscarRepositoriosFavoritos}
