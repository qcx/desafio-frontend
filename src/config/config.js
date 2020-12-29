export default function fetchAPI(api) {
  let response = fetch(api, {
    method: "GET",
    headers: {
      Authorization: `token a086dfffb0e70fd500e2482b09fe555447ca07be`,
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
