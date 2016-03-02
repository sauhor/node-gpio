var fs = require('fs');

var red_pin = 13
var green_pin = 19
var blue_pin = 26

fs.writeFileSync('/sys/class/gpio/export', red_pin);
fs.writeFileSync('/sys/class/gpio/export', green_pin);
fs.writeFileSync('/sys/class/gpio/export', blue_pin);

fs.writeFileSync('/sys/class/gpio/gpio'+red_pin+'/direction', 'out');
fs.writeFileSync('/sys/class/gpio/gpio'+green_pin+'/direction', 'out');
fs.writeFileSync('/sys/class/gpio/gpio'+blue_pin+'/direction', 'out');

fs.writeFileSync('/sys/class/gpio/gpio'+red_pin+'/value', 1);
fs.writeFileSync('/sys/class/gpio/gpio'+green_pin+'/value', 1);
fs.writeFileSync('/sys/class/gpio/gpio'+blue_pin+'/value', 1);


setTimeout(function(){
    fs.writeFileSync('/sys/class/gpio/gpio'+red_pin+'/value', 0);
    fs.writeFileSync('/sys/class/gpio/gpio'+green_pin+'/value', 0);
    fs.writeFileSync('/sys/class/gpio/gpio'+blue_pin+'/value', 0);
	fs.writeFileSync('/sys/class/gpio/unexport', 13);
	fs.writeFileSync('/sys/class/gpio/unexport', 19);
	fs.writeFileSync('/sys/class/gpio/unexport', 26);
}, 2000);

