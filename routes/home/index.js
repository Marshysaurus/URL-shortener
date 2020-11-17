const router = require("express").Router();

const { home } = require("../../controllers/HomepageController");
const { postOne, redirect } = require("../../controllers/UrlController");

router.get("/", home);
router.post("/urls", postOne);
// Overwrite all but urls
router.get("/:id", redirect);

module.exports = {
  pathname: "/",
  router,
};
