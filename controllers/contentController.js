const Content = require("../models/Content");
const { tryCatchHelper } = require("../helpers/tryCatchHelper");

//* get game content (items)

exports.getGameContent = tryCatchHelper(async (req, res, next) => {
  const search = req.body.search;
  const items = await Content.findOne({ ecosystem: search }).select(
    "ecosystem items"
  );

  if (!items) {
    return next(new AppError("No items here!", 404));
  }

  return res
    .status(200)
    .json({ status: "success", message: "Found items", items });
});

//* get quiz content (questions)

exports.getQuizContent = tryCatchHelper(async (req, res, next) => {
  const search = req.body.search;
  const questions = await Content.findOne({ ecosystem: search }).select(
    "ecosystem questions"
  );

  if (!questions) {
    return next(new AppError("No questions here!", 404));
  }

  return res
    .status(200)
    .json({ status: "success", message: "Found Questions", questions });
});
