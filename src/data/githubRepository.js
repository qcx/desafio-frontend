import { githubApi, githubUrl, githubAvatarUrl } from "./constants";

//poderia quebrar em 3 queries separadas, mas para este demo vou deixar tudo junto pois só é utilizado em 1 lugar
export async function getData() {
  // const repositoriosPromise = new Promise((r) => r({ json: () => [1, 2] }));
  // const seguidoresPromise = new Promise((r) => r({ json: () => [] }));
  // const seguindoPromise = new Promise((r) => r({ json: () => [] }));

  const repositoriosPromise = fetch(`${githubApi}/subscriptions`);
  const seguidoresPromise = fetch(`${githubApi}/followers`);
  const seguindoPromise = fetch(`${githubApi}/following`);

  const promises = await Promise.all([
    repositoriosPromise,
    seguidoresPromise,
    seguindoPromise,
  ]);

  const [repositorios, seguidores, seguindo] = await Promise.all(
    promises.map((v) => v.json())
  );

  return { repositorios, seguidores, seguindo };
}
