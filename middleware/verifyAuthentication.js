const jwt = require('jsonwebtoken');

const verifyAuthentication = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader) return response.send(401).send('No auth header');

    const [authType, authToken] = authHeader.split(' ');

    if(!authType || authType !== 'Bearer' || !authToken) return res.status(400).send('Invalid auth header');

    try {
        const decodedToken = jwt.verify(authToken, process.env.SECRET_OR_KEY);
        request.token = decodedToken;
        next();
    } catch (error) {
        return response.status(401).send('Invalid auth header');
    }

};

module.exports = verifyAuthentication;