
//this busts Github Pages 10 minute cache scheme
//if browser is running stale code, versions won't match and we reload once.
const BUILD = import.meta.env.VITE_BUILD_ID;
const RELOAD_KEY = 'version-check:reloaded-for';

export function checkVersion() {
  if (!BUILD) return; // local build, nothing to compare against

  fetch(`${import.meta.env.BASE_URL}version.json?_=${Date.now()}`, { cache: 'no-store' })
    .then((r) => r.json())
    .then(({ build }) => {
      if (!build || build === BUILD) return;
      if (sessionStorage.getItem(RELOAD_KEY) === build) return; // already reloaded for this one
      sessionStorage.setItem(RELOAD_KEY, build);
      location.reload();
    })
    .catch(() => {});
}
