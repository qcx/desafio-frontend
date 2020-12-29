import fetchAPI from "../config/config";

const uri = "https://api.github.com/users";

function getUser(user = "Rich-Harris") {
  const api = `${uri}/${user}`;

  let response = fetchAPI(api);
  return response;
}

function listRepositories(user = "Rich-Harris") {
  const api = `${uri}/${user}/repos`;

  let response = fetchAPI(api);
  return response;
}

export { getUser, listRepositories };
