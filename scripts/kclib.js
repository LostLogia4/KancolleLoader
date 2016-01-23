//Global variables for shortening link names in Javascript.
var imglink = "<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"
//Optimization of embeds div query
var $embed = $("#embeds");

//load static info from bgm.js
function loadbgm() {
	$.each(bgm, function(index, StaticAsset){
		$embed.append(imglink+ServerIP+"/kcs/resources/"+StaticAsset+"\">");
	});
}

//load static info from maps.js
function loadmap() {
	$.each(worldmaps, function(index, StaticAsset){
		$embed.append(imglink+ServerIP+"/kcs/resources/swf/map/"+StaticAsset+"\">");
	});
}

//load static info from furniture.js
function loadfurnish() {
	$.each(furniture, function(index, StaticAsset){
		$embed.append(imglink+ServerIP+"/kcs/resources/image/furniture/"+StaticAsset+"\">");
	});
}

//load equipment icons via "for loops" statement
function loadequip() {
			
	for (EquipIDNum = 1; EquipIDNum <= CurrentMaxEquip; EquipIDNum++) {
	
		//Zero paddings
		if (EquipIDNum < 100) EquipIDNum = "0" + EquipIDNum;
		if (EquipIDNum <  10) EquipIDNum = "0" + EquipIDNum;

		//Image prefetch embeds (with damecon exception)
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
		if (EquipIDNum != 42) $embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
		if (EquipIDNum != 42) $embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/remodal/"+EquipIDNum+".png\">");
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/statustop_item/"+EquipIDNum+".png\">");
		
	}
}

//load titlecall audio calls via "for loops" statement
function loadtitlecall() {
			
	for (CallIDNum = 1; CallIDNum <= 20; CallIDNum++) {
	
		//Zero paddings
		if (CallIDNum <  10) CallIDNum = "0" + CallIDNum;
		
		//mp3 prefetch embeds
		//Intentionally wrapped in img for silence.
		$embed.append(imglink+ServerIP+"/kcs/sound/titlecall/a/"+CallIDNum+".mp3\">");
		if (CallIDNum <= 13) $embed.append(imglink+ServerIP+"/kcs/sound/titlecall/b/"+CallIDNum+".mp3\">");
		if (CallIDNum <= 11) $embed.append(imglink+ServerIP+"/kcs/sound/titlecall/c/"+CallIDNum+".mp3\">");

	}
}

function loadeqtxt() {
	//load equipment text image from EquipTxt variable
	$.each(EquipTxt, function(index, EquipIDNum){
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/btxt_flat/"+EquipIDNum+".png\">");
	});
}

function loaditem() {
	//load item image from UseItem variable
	$.each(UseItem, function(index, ItemIDNum){
		$embed.append(imglink+ServerIP+"/kcs/resources/image/useitem/card/"+ItemIDNum+".png\">");
	});
}

function loadshipcg() {
	//parse api_start2 master data to generate kanmusu CGs including version number
	//Intentionally wrapped in img to avoid crashing the Flash plugin.
	$.each(shipgraph, function(index, ShipGraph){
		if (( (ShipGraph.api_sortno != 0) || (ShipGraph.api_id > 500) ) && !(blacklistID.indexOf(ShipGraph.api_id) >= 0)) {
			$embed.append(imglink+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf?VERSION="+ShipGraph.api_version+"\">");
		}
	});
}

function loadshipvoice() {
	//parse api_start2 master data to generate kanmusu CGs including version number
	$.each(shipgraph, function(index, ShipGraph){
		if ((ShipGraph.api_sortno != 0) && (ShipGraph.api_id < 500)) {
			//Assign the link into a local variable
			var shipvoicelnk = imglink+ServerIP+"/kcs/sound/kc"+ShipGraph.api_filename;
			//loop for numbers
			for (LineNum = 0; LineNum <= 28; LineNum++) {
			//skip line 22
			if (LineNum == 22) LineNum++;
			//append the remaining parameters
			if (ShipGraph.api_version == 1) {
				shipvoicelnk += LineNum+".mp3\">";
			} else {
				shipvoicelnk += LineNum+".mp3?version="+ShipGraph.api_version+"\">";
			}
			//append the link
			$embed.append(shipvoicelnk);
			
			}
		}
	});
}

//calls Interface.js local function before generating interface links
function loadinterface() {
	uilinkage = defineInterface();
	
	$.each(uilinkage, function(index, DynamicAsset){
		$embed.append(imglink+ServerIP+DynamicAsset+"\">");
	});
}
