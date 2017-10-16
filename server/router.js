var router = require('koa-router')();
var example = require("./pages/example");
router.get('/', example);

router.get("/test",async function(ctx){
    ctx.body = 'Hello Wordddddddld';
})



module.exports=router;