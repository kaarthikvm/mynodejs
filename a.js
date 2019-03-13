const Logger = require('bunyan-logger');
const logger = new Logger({ stream: 'debug', src:true });
console.log(process.pid);
var myfunc = function(){
    logger.error("Hello World");//new Error('Lorem'));
}

myfunc();
