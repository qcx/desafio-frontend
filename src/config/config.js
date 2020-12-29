export default function fetchAPI(api) {
  let response = fetch(api, {
    method: "GET",
    headers: {
      Authorization: `token  ce0b4a7c7ea1567e859b7136a3d90e5e07ab7ce5`,
    },
  })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json)
    .catch(function (err) {
      console.error("Não foi possível achar a informação", err);
    });

  return response;
}
