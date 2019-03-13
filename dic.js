
var t=function(){
 this.a=100;
 this.fptr = function(arg){ console.log(arg)};
 this.d={"d1":this} // this pointer prints all class info ..similar to "str" in python
}


b ={ "d":  new t()}
var data=undefined

// member variable
t.prototype.mvar =100

// key value pair based method define
t.prototype={
    rest:function(d){
                  console.log("REST method" +  d)
                   },
};

t.prototype.display = function(){
 console.log("display" + this.mvar);
}


t.builder=function builder (a,b,c){
                console.log(a + b + c);
            };
//function ptr
f=new t();
f.display();
f.fptr(1000);
console.log(f.d.d1);
f.rest(22);
f.builder(10,11,12);


/*
process.stdin.resume();
process.stdin.setEncoding( 'utf8' );
process.stdin.on('data', function(chunk) { data += chunk; });
process.stdin.on('close', function() { console.log('data: ' + data); });
*/
