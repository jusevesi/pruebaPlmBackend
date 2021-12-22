const express = require('express');
const app = express();
const port = 8080;
const {usuariosRoute} = require('./routes/usuariosRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

usuariosRoute(app);

app.get('*', function (req, res) {
    res.send('404 Page not found')
})

app.listen(port, () => {
    console.log(`Sever online`)
})