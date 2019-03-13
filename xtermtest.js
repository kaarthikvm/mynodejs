var exec = require('child_process').exec;


var Job=function(command) {
    this.command = command;
    console.log(command);
    this.args = [].slice.call(arguments,1);
    console.log(this.args)
}



Job.prototype.start = function start(){
var  cmd = this.command + " " + this.args.join(" ");
console.log(cmd);
exec(cmd,function(err,d) {
   console.log("error" + err);
   console.log("result " + d);
   exec("read");

});
}

//var t= new Job("xterm","-e","nodejs","/home/vmk/mygit/mynodejs/cb.js");
var t= new Job("nodejs","/home/vmk/mygit/mynodejs/cb.js");
t.start();

