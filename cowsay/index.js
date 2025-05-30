const express = require('express');
const cowsay = require('cowsay');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  
    const message = req.query.m || 'La vaca hace muuu!';

    const cow = cowsay.say ({
        text: message,
        e: 'oO',
        T: 'U '
    });

    res.send(`
        <pre>${cow}</pre>
        <h1>${message}</h1>
    `);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}
);