const { nanoid } = require("nanoid");
const Url = require("../models/Urls");

async function postOne(req, res) {
  const { longUrl } = req.body;
  const shortUrl = "http://localhost:4200/" + nanoid(5);
  const insert = await Url.insertOne({ longUrl, shortUrl });
  const inserted = await Url.getOne(insert[0]);

  res.send({ data: inserted });
}

async function redirect(req, res) {
  const shortenedId = req.params.id;
  const redirectUrl = "http://localhost:4200/" + shortenedId;
  if (redirectUrl.charAt(redirectUrl.length - 1) === "+") {
    const url = await URL.getOneWithShortUrl(redirectUrl.slice(0, -1));
    res.render("homepage/index", { url });
  } else {
    const url = await URL.getOneWithShortUrl(redirectUrl);

    if (url != null) {
      await URL.updateShortenedCount(url.id, url.redirectCount + 1);
      res.redirect(url.longUrl);
    }
  }
}

module.exports = {
  postOne,
  redirect,
};
