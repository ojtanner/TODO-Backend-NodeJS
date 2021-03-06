const registerRouter = require("express").Router();
const { User } = require("../mongoose/mongoose");
const { ProblemDetails, problemTypeEnum } = require("../utils/ProblemDetails");

registerRouter.post("/", async (req, resp) => {
  try {
    const emailInUse = await User.findOne({ email: req.body.email });
    if (emailInUse) {
      const problem = new ProblemDetails(problemTypeEnum.EMAIL_UNAVAILABLE);
      return resp
        .status(problem.status)
        .contentType("application/problem+json")
        .send(problem);
    }

    const user = new User(req.body);
    await user.save();
    return resp.status(200).send(user);
  } catch (error) {
    console.log(error);
    const problem = new ProblemDetails(problemTypeEnum.INTERNAL_ERROR);
    return resp
      .status(problem.status)
      .contentType("application/problem+json")
      .send(problem);
  }
});

module.exports = registerRouter;
