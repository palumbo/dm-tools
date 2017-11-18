$(document).ready(function(){
	
	$.getJSON('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json', function(data){
		// console.log(data); 
		var output = ""; 
		$.each(data, function(key,val){
			
			output += "<h1>" + val.name + "</h1>"; 
			output += "<p>" + val.size + ", " + val.type + ", " + val.alignment + "</p>"; 
			output += "<hr>"
			output += "<table id='table1'>"
			output += "<tr><th scope='row'>Armor Class</th><td>" + val.armor_class + "</td></tr>"; 
			output += "<tr><th scope='row'>Hit Points</th><td>" + val.hit_points + "</td></tr>";
			output += "<tr><th scope='row'>Speed</th><td>" + val.speed + "</td></tr>"; 
			output += "</table>";
			output += "<p></p>"; 
			output += "<table class='stats'>";
			output += "<tr><th scope='col'>STR</th><th scope='col'>DEX</th><th scope='col'>CON</th><th scope='col'>INT</th><th scope='col'>WIS</th><th scope='col'>CHA</th></tr>";
			output += "<tr><td id='str'>" + val.strength + "</td><td id='dex'>" + val.dexterity + "</td><td id='col'>" + val.constitution + "</td><td id='int'>" + val.intelligence + "</td><td id='wis'>" + val.wisdom + "</td><td id='cha'>" + val.charisma + "</td></tr>";
			output += "</table>"; 
			// console.log(val.special_abilities.length); <- gives me object length
			// console.log(val.special_abilities[1].name); <- outputs name of first special ability
			output += "<h2>Special Abilities</h2>"; 
			output += "<ul>"; 
			if (typeof val.special_abilities === "undefined") { 
				console.log(val.name + " has no special abilities");  
				output += "<li>" + val.name + " has no special abilities</li>"; 
			} else {
				console.log(val.name + " has " + val.special_abilities.length + " special abilities"); 
				for (var i = 0; i < val.special_abilities.length; i++) {
					output += "<li>" + val.special_abilities[i].name + " - " + val.special_abilities[i].desc + "( Attack Bonus: " + val.special_abilities[i].attack_bonus + ")</li>"; 
				}
			}
			output += "</ul>"


			$("#update").html(output); 
		}) //.each
	}) // .getJSON
	
	
	
	$("#spawn").click(function(){
		$("#battleground").append("<hr>"); 
		spawnMonsters();  
	}); 
	
	
	function spawnMonsters(mon, num){
		var mon = $("#monster-picker").val(); 
		var num = $("#monster-number").val(); 
		
		// $("#battlefield").text(mon + "|" + num); 
		
		for (var i = 1; i <= num; i++) {
			console.log(mon + i) 
			$("#battleground").append("<input type='text' size='20' placeholder='" + mon + " Name/Location'>"); 
			$("#battleground").append("<input type='number' size='7' value='7'>"); 
			$("#battleground").append("<br>");
		}

		
	}; // spawnMonsters
}); // document.ready