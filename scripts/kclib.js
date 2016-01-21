//Global variables for shortening link names in Javascript.
var imglink = "<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"

//load static info from bgm.js
function loadbgm() {
	$.each(bgm, function(index, StaticAsset){
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/"+StaticAsset+"\">");
	});
}

//load static info from maps.js
function loadmap() {
	$.each(worldmaps, function(index, StaticAsset){
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/swf/map/"+StaticAsset+"\">");
	});
}

//load static info from furniture.js
function loadfurnish() {
	$.each(furniture, function(index, StaticAsset){
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/furniture/"+StaticAsset+"\">");
	});
}

//load equipment icons via for loops
function loadequip() {
			
	for (EquipIDNum = 1; EquipIDNum <= CurrentMaxEquip; EquipIDNum++) {
	
		//Zero paddings
		if (EquipIDNum < 100) EquipIDNum = "0" + EquipIDNum;
		if (EquipIDNum <  10) EquipIDNum = "0" + EquipIDNum;

		//Image prefetch embeds (plus exclusion list)
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
		if (EquipIDNum != 42) $("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
		if (EquipIDNum != 42) $("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/remodal/"+EquipIDNum+".png\">");
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/statustop_item/"+EquipIDNum+".png\">");
		
	}
}

function loadeqtxt() {
	//load equipment text image from EquipTxt variable
	$.each(EquipTxt, function(index, EquipIDNum){
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/slotitem/btxt_flat/"+EquipIDNum+".png\">");
	});
}

function loaditem() {
	//load item image from UseItem variable
	$.each(UseItem, function(index, ItemIDNum){
		$("#embeds").append(imglink+ServerIP+"/kcs/resources/image/useitem/card/"+ItemIDNum+".png\">");
	});
}

function loadshipcg() {
	//parse api_start2 master data to generate kanmusu CGs including version number
	//Intentionally wrapped in img to avoid crashing the Flash plugin.
	$.each(shipgraph, function(index, ShipGraph){
		if (( (ShipGraph.api_sortno != 0) || (ShipGraph.api_id > 500) ) && !(blacklistID.indexOf(ShipGraph.api_id) >= 0)) {
			$("#embeds").append(imglink+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf?VERSION="+ShipGraph.api_version+"\">");
		}
	});
}

//calls Interface.js local function before generating interface links
function loadinterface() {
	uilinkage = defineInterface();
	
	$.each(uilinkage, function(index, DynamicAsset){
		$("#embeds").append(imglink+ServerIP+DynamicAsset+"\">");
	});
}
