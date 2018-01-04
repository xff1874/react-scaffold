import SSR16 from 'CJS/module/example/ssr16'
import ReactDomServer from "react-dom/server";
import React from "react";

const Html = (props) => {
    return (
        <html>
            <head><title>App</title></head>
            <body>
                <SSR16 />
            </body>
        </html>
    )
}

module.exports = async function (ctx) {
    ctx.state.ssr16 = { title: "ssr16 title byinline" };
    const steam = await ReactDomServer.renderToNodeStream(<Html />);

    ctx.type = "text/html"
    ctx.body = steam;

    // steam.pipe(ctx.res, { end: false })
    // steam.on("end", () => {
    //     return ctx.render('ssr16.html')
    // })


}