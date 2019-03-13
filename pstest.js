var ps = require('ps-node');
// Begin reading from stdin so the process does not exit.
process.stdin.resume();
 
// A simple pid lookup
ps.lookup({ pid: 33712 }, function(err, resultList ) {
    if (err) {
        throw new Error( err );
    }
    console.log("Raw result " + JSON.stringify(resultList));
 
    var process = resultList[ 0 ];
    console.log("First  result " + JSON.stringify(resultList[0]));
 
    if( process ){
 
        console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
    }
    else {
        console.log( 'No such process found!' );
    }
});


process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
});


process.abort()
