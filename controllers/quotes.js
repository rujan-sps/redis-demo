const Quote = require("../models/Quote");
const { redis } = require('../config/redisClient')

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Public
exports.getQuotes = async (req, res, next) => {
    try {
        const quotes = await Quote.find();
        redis.setEx('quotes',60, JSON.stringify(quotes))
        res.status(200).json({ success: true, message: "Database",count:quotes.length, data: quotes });
    } catch (error) {
        res.status(500).json({ success: false, error: error?.message || "Server Error" });
    }
};
