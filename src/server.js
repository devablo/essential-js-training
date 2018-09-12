const express = require('express')
const path = require('path')
const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.resolve(__dirname, 'wwwroot')))
app.use('/public', express.static('wwwroot'))
app.use('/public', express.static(path.resolve(__dirname, 'wwwroot', 'js')))

/* app.get('/', function (req, res) {
    res.send('Hello World!')
  }) */

app.listen(port, () => {
    console.info(`Listening to port ${port}`)
});