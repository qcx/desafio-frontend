'use strict'
import _, { identity } from 'lodash';
import * as gitHubService from './github-services';
import swal from 'sweetalert';





  // document.getElementById('primeira-sessao').style.backgroundImage = "url('dist/images/home2.jpg')";

  const btnRepositorios = document.getElementById("buscar-repositorio");
  const btnRepositoriosFavoritos = document.getElementById("buscar-repositorio-favorito");

  btnRepositorios.addEventListener('click',function(){

    const user = document.getElementById("input-profile-valor").value;

    const buscarUser = gitHubService.buscarUsuario(user);
    const buscarRepos = gitHubService.buscarRepositorios(user);

    buscarUser.addEventListener("loadend",function(){
      if(this.status === 200){


         console.log(this.responseText);
         const response = JSON.parse(this.responseText);
         const {avatar_url,public_repos,followers,following} = response;
         document.getElementById("foto-profile").style.backgroundImage = `url('${avatar_url}')`;
         document.getElementById("qtd-seguidores").innerHTML = followers;
         document.getElementById("qtd-seguindo").innerHTML = following;
         document.getElementById("qtd-repositorios").innerHTML = public_repos;

        
      }
      else{
        swal("Perfil não encontrado.","Tente novamente!");
      }

    });
    
    buscarRepos.addEventListener("loadend",function(){
      if(this.status === 200){

         console.log(this.responseText);
         const response = JSON.parse(this.responseText);

         let table_repos = document.getElementById("tabela-lista-repositorios-id").style.visibility = 'visible';
          document.getElementById("terceira-sessao-repositorios-id").style.display = 'block';

          document.getElementById("titulo-repositorios-2").style.display = 'none';
          document.getElementById("titulo-repositorios-1").style.display = 'block';


          var linhasTbody = document.getElementById("tabela-lista-repositorios-id").tBodies.length;

          if(linhasTbody > 0){

            var oldTBody = document.getElementById("tbody-repositorios");
            document.getElementById("tabela-lista-repositorios-id").removeChild(oldTBody);

          }

          var tbody = document.createElement("tbody");
          tbody.setAttribute("id","tbody-repositorios");
          response.forEach(element => {

            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerHTML = element.name;

            tr.appendChild(td);
            tbody.appendChild(tr);
        });
        document.getElementById("tabela-lista-repositorios-id").appendChild(tbody);

      }
      else{
        swal("Perfil não encontrado.","Tente novamente!");
      }

    });


    buscarUser.send();
    buscarRepos.send();

  });

  btnRepositoriosFavoritos.addEventListener('click',function(){

    const user = document.getElementById("input-profile-valor").value;

    const buscarUser = gitHubService.buscarUsuario(user);
    const buscarRepositoriosFavoritos = gitHubService.buscarRepositoriosFavoritos(user);

    buscarUser.addEventListener("loadend",function(){
      if(this.status === 200){
        
        console.log(this.responseText);
        const response = JSON.parse(this.responseText);
        const {avatar_url,public_repos,followers,following} = response;
        document.getElementById("foto-profile").style.backgroundImage = `url('${avatar_url}')`;
        document.getElementById("qtd-seguidores").innerHTML = followers;
        document.getElementById("qtd-seguindo").innerHTML = following;
        document.getElementById("qtd-repositorios").innerHTML = public_repos;

      }
      else{
        swal("Perfil não encontrado.","Tente novamente!");
      }

    });
    
    buscarRepositoriosFavoritos.addEventListener("loadend",function(){
      if(this.status === 200){
            
        console.log(this.responseText);
        const response = JSON.parse(this.responseText);

        let table_repos = document.getElementById("tabela-lista-repositorios-id").style.visibility = 'visible';
        document.getElementById("terceira-sessao-repositorios-id").style.display = 'block';

        document.getElementById("titulo-repositorios-2").style.display = 'block';
        document.getElementById("titulo-repositorios-1").style.display = 'none';

        var linhasTbody = document.getElementById("tabela-lista-repositorios-id").tBodies.length;

        if(linhasTbody > 0){

           var oldTBody = document.getElementById("tbody-repositorios");
           document.getElementById("tabela-lista-repositorios-id").removeChild(oldTBody);
           
        }

         var tbody = document.createElement("tbody");
         tbody.setAttribute("id","tbody-repositorios");
         response.forEach(element => {

           let tr = document.createElement("tr");
           let td = document.createElement("td");
           td.innerHTML = element.name;

           tr.appendChild(td);
           tbody.appendChild(tr);
           // table_repos.appendChild(td);
       });
       document.getElementById("tabela-lista-repositorios-id").appendChild(tbody);

      }
      else{
        swal("Perfil não encontrado.","Tente novamente!");
      }

    });

    buscarUser.send();
    buscarRepositoriosFavoritos.send();

  });


  
