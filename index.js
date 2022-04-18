const TRACKING_PARAMS = require("./data/params");

module.exports = function removeParams($link, allowlist = []) {
  const url = new URL($link);

  for (const [key] of url.searchParams) {
    const matchedParam = TRACKING_PARAMS.find(({ name }) => name === key);

    if (matchedParam && !allowlist.includes(matchedParam.company)) {
      url.searchParams.delete(key);
    }
  }

  return url.toString();
};
