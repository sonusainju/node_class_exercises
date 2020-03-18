const Logger = require("logplease");
var logger  = Logger.create('utils');
    logger.debug(`Hello, Node.js`);
    logger.log(`This is a log message`); // alias for debug()