$(document).ready(function(){
	var rawDate = new Date()
	var clockOutput = ""
	var hours =""

	hours = rawDate.getHours()

	$("#clock").html(hours)
})
