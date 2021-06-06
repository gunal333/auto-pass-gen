const express = require('express');
const router = express.Router();
const path = require('path');
const dirname = require('../util/path')
const passDetails = require('./gen_pass');
const items = passDetails.items;
router.get('/passwords',(req,res,next)=>
{
    if(items.length == 0)
    {
      res.redirect('/');
    }
    else
    {
    const passwords = [];
    items.forEach(item => 
        {
            const alpha = item.alpha;
            const digits = item.digits;
            const splChar = item.splChar;
        for (let index = 0; index < item.passCount; index++) {
            var pass = "";
            for (let i = 0; i < item.passLen; i++) {
                if((i+1)%3==1)
                {
                var pass_a = alpha.charAt(Math.floor(Math.random() * alpha.length));
                pass = pass + pass_a;
                }
                else if((i+1)%3==2)
                {
                var pass_a = digits.charAt(Math.floor(Math.random() * digits.length));
                pass = pass + pass_a;
                }
                else
                {
                var pass_a = splChar.charAt(Math.floor(Math.random() * splChar.length));
                pass = pass + pass_a;
                }
            }
            var suffle_pass = pass.split('');
            var len = suffle_pass.length;
            for(var i=0;i<len-1;i++)
            {
                var j = Math.floor(Math.random()*len);
                var temp = suffle_pass[i];
                suffle_pass[i] = suffle_pass[j];
                suffle_pass[j] = temp;
            }
            pass = suffle_pass.join('');
            passwords.push(pass);
        }
    items.length=0;
    });
    
     res.render('passwords',{pass:passwords});
    }
    
})
module.exports = router;
