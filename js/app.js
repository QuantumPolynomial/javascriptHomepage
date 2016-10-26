var clock = document.getElementById("clock");
var hexColor = document.getElementById("hex-color");
var redditColor = document.getElementById("reddit");










function hexClock() {
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

	if (hours.length < 2){
		hours = '0' + hours;
	}
	if (minutes.length < 2){
		minutes = '0' + minutes;
	}
	if (seconds.length < 2){
		seconds = '0' + seconds;
	}

    var hexColorStr = '#' + hours + minutes + seconds;
	var clockStr =  hours + ':' + minutes + ':' + seconds;
	hexColor.textContent = hexColorStr;
	clock.textContent = clockStr;
	document.body.style.background = hexColorStr;
}
hexClock()
setInterval(hexClock, 1000);
