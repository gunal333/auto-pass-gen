const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dirname = require('./util/path');
const passDetails = require('./routes/gen_pass');
const pass = require('./routes/pass');
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine","pug");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(dirname,"/public")));
app.use(passDetails.routes);
app.use(pass);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(dirname,'views','404.html'));
});
app.listen(port,()=>{
  console.log('App running on port '+port);
});

