import Example from 'CJS/module/example/Example'
import ReactDomServer from "react-dom/server";
import React from "react";
import fetch from "CJS/util/fetch.js"


module.exports = async function (ctx) {
    const port = parseInt(process.env.PORT) || 3000;
    const _url = ctx.request.origin + "/data.json";

    await fetch(_url).then(r => {
        const markup = ReactDomServer.renderToString(<Example {...r} />);

        ctx.state = { title: '眼镜活动2', markup: markup, initData: JSON.stringify(r) }
        return ctx.render('example.html')
    });
}