let rateLimiters = [];

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowSize = 10000 // 10 seconds
    const maxReq = 5;

    // console.log("time: ", now)
    // console.log("r1: ", rateLimiters)

    ratelimiters = rateLimiters.filter((userReq) => {
        (now - userReq.startTime) < windowSize
    });
    // console.log("r2: ", rateLimiters)

    // console.log("len: ", rateLimiters.length)
    if (rateLimiters.length < maxReq) {
        rateLimiters.push({
            ip: ip,
            startTime: now
        })
        return next();
    }
    else {
        res.json({ message: "Too many requests, please try again later." })
    }
}
export default rateLimiter