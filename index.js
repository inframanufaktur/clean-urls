const TRACKING_PARAMS = require("./data/params");

module.exports = function removeParams($link, allowlist = []) {
  const url = new URL($link);

  const toDelete = [];

  for (const [key] of url.searchParams.entries()) {
    const matchedParam = TRACKING_PARAMS.find(({ name }) => name === key);

    if (matchedParam && !allowlist.includes(matchedParam.company)) {
      // don't delete immediately
      // otherwise the loop would skip over the next entry
      toDelete.push(key);
    }
  }

  toDelete.forEach((key) => url.searchParams.delete(key));

  return url.toString();
};
