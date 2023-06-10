const usersList = require('../utils/users')

const userLogin = (req,res) => {
    const {email, password} = req.query;
   /* if (email === users.email && password === users.password){
        return res.status(200).json({access: true});
    } else {
        return res.status(200).json({access: false})
    };*/
    
    const valid = usersList.find(user => user.email === email && user.password === password);
    
    console.log(valid)
    if(valid) {
        res.status(200).json({access:true});
    } else {
        res.status(200).json({access: false});
    }
};

module.exports = userLogin;