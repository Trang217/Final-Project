const Content = require("../models/Content");
const AppError = require("../error/AppError");
const { tryCatchHelper } = require("../helpers/tryCatchHelper");

//* get game content (items)

exports.getGameContent = tryCatchHelper(async (req, res, next) => {
  const search = req.params.biome;
  const data = await Content.findOne({ ecosystem: search }).select(
    "ecosystem items"
  );

  if (!data) {
    return next(new AppError("No items here!", 404));
  }

  return res
    .status(200)
    .json({ status: "success", message: "Found data", data });
});

//* get quiz content (questions)

exports.getQuizContent = tryCatchHelper(async (req, res, next) => {
  const search = req.params.biome;
  const data = await Content.findOne({ ecosystem: search }).select(
    "ecosystem questions"
  );

  if (!data) {
    return next(new AppError("No questions here!", 404));
  }

  return res
    .status(200)
    .json({ status: "success", message: "Found Questions", data });
});
