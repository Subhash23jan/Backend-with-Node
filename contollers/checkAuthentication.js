

function checkAuthentication(req, res, next) {
  const {type} = req.body;
  if(type === 'admin') {
    next();
  } else {  
    res.status(401).send('Unauthorized accesss');
  }
};
module.exports = checkAuthentication;