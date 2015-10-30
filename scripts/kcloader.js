//A global variable for parsing hashed suffix and assign the appropriate server.
var ServerNum = parseInt( window.location.hash.substring(1) ,10) || 1;
var ServerIndex = ServerNum - 1;
var ServerData = servers[ServerIndex];
var ServerIP = ServerData.ip;

(function(){
	
	$(document).on("ready", function(){
		
		$("#progress-title").text(ServerData.name);     //display the server name
		$("#progress-text").text("Loading...");         //replace initializing with loading
		
		//load static info from bgm.js
		$.each(bgm, function(index, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
		//load static info from maps.js
		$.each(worldmaps, function(index, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
		//load equipment icons via for loops
		for (EquipIDNum = 1; EquipIDNum <= CurrentMaxEquip; EquipIDNum++) {
		
			//Zero paddings
			if (EquipIDNum < 100) EquipIDNum = "0" + EquipIDNum;
			if (EquipIDNum <  10) EquipIDNum = "0" + EquipIDNum;
		
			//Image prefetch embeds
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
			
		}
		
		//parse api_start2 master data to generate kanmusu CGs including version number
		//Operational, but is currently bugged by flash plugin crash
		$.each(shipgraph, function(index, ShipGraph){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf?VERSION="+ShipGraph.api_version+"\" type=\"application/x-shockwave-flash\">");
		});
		
	});
	
})();
