const postRouter = require("express").Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Todo } = require("../mongoose/mongoose");
const verifyAuthentification = require("../middleware/verifyAuthentication");

postRouter.post("/", verifyAuthentification, async (req, res) => {
  const todo = new Todo({
    owner: new ObjectId(req.token.id),
    title: req.body.title,
    description: req.body.description
  });

  try {
    await todo.save();
    return res.status(200).send(todo);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = postRouter;
