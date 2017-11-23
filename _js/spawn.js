$(document).ready(function(){
	
	// listens for select change 
	$("select").change(function(){
		var num = $(this).val(); // get num of monsters
		var mon = $("#monster-name").text();  // get monster's name 
		var hp = $("#hp").text(); // get monster's hp
		var xp = $("#xp").text(); // get's monster's xp

		// spawns the num of monsters selected
		for (var i = 1; i <= num; i++) {
			$("#battleground").append("<input type='text' size='30' placeholder='" + mon + " Name/Location'>");
			$("#battleground").append("<input type='number' value='" + hp + "' class='dmg'>"); 
			$("#battleground").append("<span class='monsterxp'></span><span class='loot'></span>"); 
			$("#battleground").append("<br>"); 
		} // for loop
		
		$("#battleground").append("<hr>"); 


		// tracks damage to individual monsters 
		$(".dmg").change(function(){
			if ($(this).val() <= 0){ 
				$(this).css("background-color", "red"); 
				$(this).next().text(xp); 
			} else { 
				$(this).css("background-color", "white"); 	
				$(this).next().text(""); 			
			}
		}) //select.dmg	

	}) //select.change

}); // document.ready


function loot(){
	var loot = Math.floor((Math.random() * 10) + 1); 
	return loot; 
}