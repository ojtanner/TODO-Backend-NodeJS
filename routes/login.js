const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../mongoose/mongoose");
const { ProblemDetails, problemTypeEnum } = require("../utils/ProblemDetails");

loginRouter.post("/", async (req, resp) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const problem = new ProblemDetails(problemTypeEnum.INVALID_CREDENTIALS);
      return resp
        .status(problem.status)
        .contentType("application/problem+json")
        .send(problem);
    }

    const passwordIsValid = await user.validatePassword(req.body.password);
    if (!passwordIsValid) {
      const problem = new ProblemDetails(problemTypeEnum.INVALID_CREDENTIALS);
      return resp
        .status(problem.status)
        .contentType("application/problem+json")
        .send(problem);
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_OR_KEY);
    return resp.status(200).send(token);
  } catch (error) {
    console.log(error);
    const problem = new ProblemDetails(problemTypeEnum.INTERNAL_ERROR);
    return resp
      .status(problem.status)
      .contentType("application/problem+json")
      .send(problem);
  }
});

module.exports = loginRouter;
