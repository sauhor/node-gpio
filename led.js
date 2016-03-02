var http = require('http');
var fs = require('fs');

var red_pin = 13
var green_pin = 19
var blue_pin = 26

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8124);

function redOn() {
    fs.writeFileSync('/sys/class/gpio/export', red_pin);
    fs.writeFileSync('/sys/class/gpio/gpio'+red_pin+'/direction', 'out');
    fs.writeFileSync('/sys/class/gpio/gpio'+red_pin+'/value', 1);
}

function greenOn() {
    fs.writeFileSync('/sys/class/gpio/export', green_pin);
    fs.writeFileSync('/sys/class/gpio/gpio'+green_pin+'/direction', 'out');
    fs.writeFileSync('/sys/class/gpio/gpio'+green_pin+'/value', 1);
}

function blueOn() {
    fs.writeFileSync('/sys/class/gpio/export', blue_pin);
    fs.writeFileSync('/sys/class/gpio/gpio'+blue_pin+'/direction', 'out');
    fs.writeFileSync('/sys/class/gpio/gpio'+blue_pin+'/value', 1);
}

function redOff() {
    fs.writeFileSync('/sys/class/gpio/gpio'+red_pin+'/value', 0);
    fs.writeFileSync('/sys/class/gpio/unexport', red_pin);
}

function greenOff() {
    fs.writeFileSync('/sys/class/gpio/gpio'+green_pin+'/value', 0);
    fs.writeFileSync('/sys/class/gpio/unexport', green_pin);
}

function blueOff() {
    fs.writeFileSync('/sys/class/gpio/gpio'+blue_pin+'/value', 0);
    fs.writeFileSync('/sys/class/gpio/unexport', blue_pin);
}

redOn();

setTimeout(function(){
    redOff();
}, 2000);

