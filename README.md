# @inframanufaktur/clean-urls

Utility to remove tracking parameters from an URL

## Usage

Basic usage:

```js
const removeParams = require("@inframanufaktur/clean-urls");

const cleaned = removeParams("https://www.test.com/?utm_source=test");
// --> 'https://www.test.com/'
```

Allow companies through an allowlist:

```js
const removeParams = require("@inframanufaktur/clean-urls");

const cleaned = removeParams(
  "https://www.test.com/?utm_source=test&pk_campaign=test",
  ["Piwik"]
);
// --> 'https://www.test.com/?pk_campaign=test'
```

### How it works

The package takes the string of an URL and converts it with `new URL`.

Since it uses `new URL` you can only use this with URLs that contain a protocol and a hostname. `/about/?utm_source=test` will not work.

The search parameters of the URLs are matched against the list in `./data/params.js`. It it matches and the associated company is not present in your allowlist, the param gets removed.

## Compatability

Needs Node >v10 as its uses `new URL()`.
