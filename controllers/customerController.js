//const User = require('../models/customer');
const db = require('../config/db.js');
const User = db.user;

function generateToken(user, accessToken) {
    const tokenType = 'Bearer';
    const expireIn = moment().add(10, 'minutes');
    return{
        tokenType, accessToken, expireIn,
    }
}

function token() {
    const playload = {
      exp: moment().add(jwtExpirationInterval, 'days').unix(),
      iat: moment().unix(),
      sub: this._id,
    };
    return jwt.encode(playload, jwtSecret);
  }

 function transform(body) {
    const user = async (req, res)=>{
        const data = await User.findOne({where:{email:req.body.email}}, function(req, res){
            return res.json(data);
        });
    }
}
exports.register = async (req, res, next)=>{
    try {
        const user = await(new User.create(req.body));
        //const userTransform = transform(req.body.email);
        //const token = generateToken(user, token());
        res.status(httpStatus.CREATED);
        return res.json({user})
        //return res.json({token, user, userTransform })
    } catch (error) {
        return error;
    }
}
exports.getCustomer = async (req, res, next)=>{
    const data = User.findAll().then(owners => {
        res.json(owners);
      });
}