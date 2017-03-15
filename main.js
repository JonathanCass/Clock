$(document).ready(function(){
	var runClock = setInterval (clock,1000)
	
	function clock(){
		var rawDate = new Date()
		var hours = rawDate.getHours()
		hours = 0 ? 12 : hours
		hours = (hours > 12) ? hours - 12 : hours
		var minutes = rawDate.getMinutes()
		minutes = (minutes < 10) ? "0" + minutes : minutes
		var seconds = rawDate.getSeconds()
		seconds = (seconds < 10) ? "0" + seconds : seconds
		var clockOutput = hours +":"+ minutes +":"+ seconds
		$("#clock").html(clockOutput)
	}
})
