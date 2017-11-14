$("#search").keyup(function(){
	var searchField = $("#search").val(); 
	var myExp = new RegExp(searchField, "i"); 
	$.getJSON('_json/spells.json', function(data){
		// console.log(data); 
		var output = ""; // initializes output variable 					
		$.each(data, function(key, val) {
			// console.log(key, val.description); 
			if ((key.search(myExp) != -1) || (val.description.search(myExp) != -1)) {
				output += "<h1>" + key + "</h1>";  
				output +="<table class='spells-table searchresults'>";
				output += "<tr><th scope='row'>Casting Time</th><td>" + val.casting_time + "</td></tr>";
				output += "<tr><th scope='row'>Range</th><td>" + val.range + "</td></tr>"; 
				output += "<tr><th scope='row'>Components</th><td>" + val.components + "</td></tr>"; 
				output += "<tr><th scope='row'>Duration</th><td>" + val.duration + "</td></tr>"; 
				output += "<tr><th scope='row'>Level</th><td>" + val.level + "</td></tr>";
				output += "</table>";
				output += "<p class='spell-description'>" + val.description + "</p>"; 
				output += "<hr>"; 
			}
		}) // each
		$("#update").html(output); 
	}) // getJSON				
}) // keyup

