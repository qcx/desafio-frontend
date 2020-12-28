export default function fetchAPI(api) {
  let response = fetch(api, {
    method: "GET",
    headers: {
      Authorization: `token ea3487bdd63e556f3dd4fa5b25fe7f3f77383eaf `,
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
