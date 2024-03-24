const path = require("path");
module.exports = {
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: true,
  },
  localePath: path.resolve("./public/locales"),
};
