const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const limiter=require('./middlewares/ratelimmiter.js');
const userRouter = require('./routes/user');
const visitorHistorys = require('./file_management/files.js');
const multer = require('multer');
const statusMonitor = require('express-status-monitor')();
const fileOperations = require('./file_management/files.js');
const checkAuthentication = require('./contollers/checkAuthentication');
const cacheControl = require('./middlewares/cache-management.js');
const corsOptions = require('./middlewares/cors-options.js');
//app.use(visitorHistorys);
// app.set('', __dirname + '');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './file_management/');
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.filename;
//     cb(null, filename);
//   }
// });
// const upload=multer({storage:storage});
//app.use('/users', userRouter);
//app.use(statusMonitor);
// app.post("/upload",upload.single('uploaded_file'), (req, res) => {
//   res.send("Uploaded page");
// });


app.use(limiter);
app.use(express.static('public'));
app.use(express.json());
app.use(corsOptions);
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about',cacheControl,(req, res) => {
  res.send('About Page');
});
app.get('/data', (req, res) => {
  res.send('data page');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
