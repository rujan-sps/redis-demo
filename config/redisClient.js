const redisClient = require('redis').createClient;
const redis = redisClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

const connectRedis = async () => {
    try {
        await redis.connect()
        console.log("redis connected")
    } catch (error) {   
        console.log(error)
    }
}

module.exports = {redis, connectRedis}