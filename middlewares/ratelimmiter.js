const rateLimiter = require('express-rate-limit');
const maxRequests = 10;


const limiter = rateLimiter({
    windowMs: 60 * 1000,
    max: maxRequests,
    message: `You have exceeded the ${maxRequests} requests in 1 minute limit!`,
    headers: true,
    statusCode: 429,
});

module.exports = limiter;
