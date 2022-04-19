const test = require("ava");

const removeTrackingParamsFromLinks = require("../index");

test("removes utm_source", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      'https://www.test.com/?utm_source="mysource"'
    ),
    "https://www.test.com/"
  );
});

test("removes utm_medium", (t) => {
  t.is(
    removeTrackingParamsFromLinks("https://www.test.com/?utm_medium=something"),
    "https://www.test.com/"
  );
});

test("removes utm_term", (t) => {
  t.is(
    removeTrackingParamsFromLinks("https://www.test.com/?utm_term=something"),
    "https://www.test.com/"
  );
});

test("removes utm_content", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      "https://www.test.com/?utm_content=something"
    ),
    "https://www.test.com/"
  );
});

test.only("removes whole utm bunch", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      "https://www.test.com/?partner=rss&utm_source=rss&utm_campaign=rss+test&utm_medium=feed&utm_content=rss"
    ),
    "https://www.test.com/?partner=rss"
  );
});

test("removes whole piwik bunch", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      "https://www.test.com/?piwik_kwd=rss&piwik_campaign=rss+test"
    ),
    "https://www.test.com/"
  );
});

test("removes fbclid", (t) => {
  t.is(
    removeTrackingParamsFromLinks("https://www.test.com/?fbclid=something"),
    "https://www.test.com/"
  );
});

test("removes gclsrc", (t) => {
  t.is(
    removeTrackingParamsFromLinks("https://www.test.com/?gclsrc=something"),
    "https://www.test.com/"
  );
});

test("removes dclid", (t) => {
  t.is(
    removeTrackingParamsFromLinks("https://www.test.com/?dclid=something"),
    "https://www.test.com/"
  );
});

test("removes msclkid", (t) => {
  t.is(
    removeTrackingParamsFromLinks("https://www.test.com/?msclkid=something"),
    "https://www.test.com/"
  );
});

test("removes utm_campaign", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      "https://www.test.com/?utm_campaign=something"
    ),
    "https://www.test.com/"
  );
});

test("allows to bypass via allowlist", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      "https://www.test.com/?utm_campaign=something",
      ["Google"]
    ),
    "https://www.test.com/?utm_campaign=something"
  );
});

test("keeps unrelated params", (t) => {
  t.is(
    removeTrackingParamsFromLinks(
      "https://www.test.com/?utm_source=testsource&other=other"
    ),
    "https://www.test.com/?other=other"
  );
});
