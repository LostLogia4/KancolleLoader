(function(){
	
	var ServerNum = parseInt( window.location.hash.substring(1) ,10) || 1;
	var ServerIndex = ServerNum - 1;
	var ServerData = servers[ServerIndex];
	var ServerIP = ServerData.ip;
	var CurrentMaxEquip = 151;
	
	$(document).on("ready", function(){
		$("#progress-title").text(ServerData.name);
		$("#progress-text").text("Loading...");
		
		$.each(bgm, function(bgm, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
		$.each(worldmaps, function(index, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
		for (EquipIDNum = 001; EquipIDNum <= CurrentMaxEquip; EquipIDNum++) {
		
			//Zero paddings
			if (EquipIDNum < 100) EquipIDNum = "0" + EquipIDNum;
			if (EquipIDNum < 10) EquipIDNum = "0" + EquipIDNum;
		
			//Image prefetch embeds
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
			
		}
		
		/*
		//Currently in beta phase
		$.each(shipgraph, function(index, ShipGraph){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf\" type=\"application/x-shockwave-flash\">");
		});
		*/
		
	});
	
})();
