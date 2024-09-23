const file = require('fs');
function fileOperation(req,res,next){
  file.writeFileSync('./file_management/visitorData.txt',"Hii I'm Subhash", (err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  next();
}
function visitorHistory(req,res,next){
  file.appendFileSync('./file_management/visitorData.txt ',"Visitor IP: "+req.ip + " Date : "+ Date.now()+" \n", (err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  next();
}

module.exports = fileOperation;
module.exports = visitorHistory;