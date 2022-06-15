const { redis } = require("../config/redisClient");

exports.redisData = (model) => {
    return async(req,res,next) =>{
        const data = await redis.get(model);
    
        if(data=== null){  
          next()
        }else{
          const result = JSON.parse(data)

          res
          .status(200)
          .json({ success: true, message: "redis",count:result.length, data: result })
        }
    }
    
};
