$(document).ready(function(){
	var rawDate = new Date()
	var clockOutput = ""
	var hours =""
	
	hours = rawDate.getHours()
	hours = 0 ? 12 : hours
	hours = (hours > 12) ? hours - 12 : hours
	clockOutput = hours +":"+ rawDate.getMinutes() +":"+ rawDate.getSeconds()
	
	$("#clock").html(clockOutput)
})
