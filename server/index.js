import Koa from "koa"
const views = require('koa-views');
const serve = require('koa-static');
const router = require("./router.js")



const app = new Koa();
const port = parseInt(process.env.PORT) || 3000;


//set view;
app.use(views(process.cwd() + '/build/client', {
    map: {
        html: 'ejs'
    }
}));

// set static
app.use(serve('build'))
app.use(serve('static'))

//routes
app.use(router.routes())
app.use(router.allowedMethods());



app.listen(port, () => {
    console.log(`${port} is listening`)
});

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});