const router = require("express").Router();

const { home } = require("../../controllers/HomepageController");
const { postOne, redirect } = require("../../controllers/UrlController");

router.get("/", home);
router.post("/urls", postOne);
// Overwrite all but urls
router.get("/:id", redirect);

// Eeach route define its path
module.exports = {
  pathname: "/",
  router,
};
