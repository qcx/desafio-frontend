export default function fetchAPI(api) {
  let response = fetch(api, {
    method: "GET",
    headers: {
      Authorization: `token d93096ff3cd0b0a96722546e4269006ac4b5b2ae`,
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
