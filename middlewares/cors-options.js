const cors = require('cors');


const corsOptions = {
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: 'Content-Type',
    preflightContinue: false,
    maxAge: 3600,
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    allowedMethods: ['POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedOrigins: ['http://localhost:3000'],
    origin: function (origin, callback) {
      if (corsOptions.allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    httpOnly: true,

}; 

module.exports=cors(corsOptions);