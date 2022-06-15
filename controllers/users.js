const User = require("../models/User");
const { redis } = require('../config/redisClient')

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Public
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        redis.setEx('users',60, JSON.stringify(users))
        res.status(200).json({ success: true, message: "Database",count:users.length, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error?.message || "Server Error" });
    }
};
