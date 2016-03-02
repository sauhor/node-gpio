var fs = require('fs');

var red_pin = 13
 
fs.writeFileSync('/sys/class/gpio/export', 26);
fs.writeFileSync('/sys/class/gpio/gpio26/direction', 'out');
fs.writeFileSync('/sys/class/gpio/gpio26/value', 1); 
 
setTimeout(function(){
	fs.writeFileSync('/sys/class/gpio/gpio26/value', 0);
	fs.writeFileSync('/sys/class/gpio/unexport', 26);
}, 2000);

