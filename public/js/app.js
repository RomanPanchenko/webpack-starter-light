const logger = require('./mymodule');
const MY_CONST = 'Hello';
let from = 'from';

console.log(`${MY_CONST} ${from} app.js`);

for (let i = 0; i < 10; i++) {
    window.setTimeout(function () {
        console.log(i);
    }, 1000);
}

logger.log('Here we are!');