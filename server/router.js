var router = require('koa-router')();
var example = require("./pages/example");
router.get('/', example);
var ssr16 = require("./pages/ssr16")

router.get("/test", async function (ctx) {
    ctx.body = 'Hello Wordddddddld';
})

router.get("/ssr16", ssr16)



module.exports = router;