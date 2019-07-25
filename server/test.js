const express = require('express');
let app = express();

app.use(express.static('./public',{ index: 'client-test.html'}));

app.listen(9002, () => {
    console.log('testing on localhost:9002');
});