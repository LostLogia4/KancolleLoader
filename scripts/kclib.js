//load static info from bgm.js
function loadbgm() {
	$.each(bgm, function(index, StaticAsset){
		$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
	});
}

//load static info from maps.js
function loadmap() {
	$.each(worldmaps, function(index, StaticAsset){
		$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
	});
}

//load equipment icons via for loops
function loadequip() {
			
	for (EquipIDNum = 1; EquipIDNum <= CurrentMaxEquip; EquipIDNum++) {
	
		//Zero paddings
		if (EquipIDNum < 100) EquipIDNum = "0" + EquipIDNum;
		if (EquipIDNum <  10) EquipIDNum = "0" + EquipIDNum;
		
		//special code for damecon
		if (EquipIDNum == 042) {
		
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/remodal/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/statustop_item/"+EquipIDNum+".png\">");

			//increment ID number to prevent redundant call.
			EquipIDNum = "0" + EquipIDNum++;
		}
	
		//Image prefetch embeds
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/remodal/"+EquipIDNum+".png\">");
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/statustop_item/"+EquipIDNum+".png\">");
		
	}
}

function loadeqtxt() {
	//load equipment text image from EquipTxt variable
	$.each(EquipTxt, function(index, EquipIDNum){
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/btxt_flat/"+EquipIDNum+".png\">");
	});
}

function loaditem() {
	//load item image from UseItem variable
	$.each(UseItem, function(index, ItemIDNum){
		$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/btxt_flat/"+ItemIDNum+".png\">");
	});
}

function loadshipcg() {
	//parse api_start2 master data to generate kanmusu CGs including version number
	//Operational, but is currently bugged by flash plugin crash
	$.each(shipgraph, function(index, ShipGraph){
		if ((ShipGraph.api_sortno != 0) || (ShipGraph.api_id > 500)) {
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf?VERSION="+ShipGraph.api_version+"\" type=\"application/x-shockwave-flash\">");
		}
	});
}

(function(){
	
	$(document).on("ready", function(){
		
		$("#progress-title").text(ServerData.name);     //display the server name
		$("#progress-text").text("Loading...");         //replace initializing with loading
		
		loadbgm();
		loadmap();
		loadequip();
		loadeqtxt();
		loaditem();
		loadshipcg();
		
	});
	
})();
