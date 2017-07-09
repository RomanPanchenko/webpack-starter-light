// require
const logger = require('./mymodule');

// es6 sample usage
const MY_CONST = 'Hello';
let from = 'from';

console.log(`${MY_CONST} ${from} app.js`);

for (let i = 0; i < 10; i++) {
    window.setTimeout(function () {
        console.log(i);
    }, 1000);
}

// module usage
logger.log('Here we are!');


// jQuery usage
$(document).ready(function () {
    const div = $('<h1 id="myh1"></h1>');
    div.text('Hi, there');
    $(document.body).append(div);
});
