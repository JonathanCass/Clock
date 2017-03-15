$(document).ready(function(){
	var runClock = setInterval (clock,1000)
	
	function clock(){
		var rawDate = new Date()
		var minutes = rawDate.getMinutes()
		minutes = (minutes < 10) ? "0" + minutes : minutes
		var seconds = rawDate.getSeconds()
		seconds = (seconds < 10) ? "0" + seconds : seconds
		var clockOutput = "#" + rawDate.getHours() + minutes + seconds
		$("#clock").html(clockOutput)
		$("body").css("background-color", clockOutput)	
	}
})
