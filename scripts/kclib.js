//Global variables for shortening link names in Javascript.
var objlink = "<object "+imgstyle+" data=\"http://"
var imgstyle = "style=\"visibility:hidden;width:0px;height:0px;\""
var imglink = "<img "+imgstyle+" src=\"http://"
var objfix = "\"></object>"
var audfix = ".mp3" + objfix;
//Optimization of embeds div query
var $embed = $("#embeds");

//calls Interface.js local function before generating interface links
function loadinterface() {
	uilinkage = defineInterface();
	
	$.each(uilinkage, function(index, DynamicAsset){
		$embed.append(objlink+ServerIP+DynamicAsset+objfix);
	});
}

//load static info from bgm.js
function loadbgm() {
	$.each(bgm, function(index, StaticAsset){
		$embed.append(objlink+ServerIP+"/kcs/resources/"+StaticAsset+objfix);
	});
}

//load static info from maps.js
function loadmap() {
	$.each(worldmaps, function(index, StaticAsset){
		$embed.append(objlink+ServerIP+"/kcs/resources/swf/map/"+StaticAsset+objfix);
	});
}

//load static info from furniture.js
function loadfurnish() {
	
	//Commonly used link
	var FurnitureLink = imglink+ServerIP+"/kcs/resources/image/furniture/";
	var AniFurnitureLink = objlink+ServerIP+"/kcs/resources/image/furniture/";
	
	//Append static assets
	$.each(furniture, function(index, StaticAsset){
		$embed.append(FurnitureLink+StaticAsset+"\">");
	});

	//Append dynamic assets
	$.each(furnituregraph, function(index, DynamicAsset){
		
		//Switch case for determining furniture type
		switch (DynamicAsset.api_type) {
			case 0: FurnitureType =  "floor/"; break;
			case 1: FurnitureType =   "wall/"; break;
			case 2: FurnitureType = "window/"; break;
			case 3: FurnitureType = "object/"; break;
			case 4: FurnitureType =  "chest/"; break;
			case 5: FurnitureType =   "desk/"; break;
		}
		
		$embed.append(AniFurnitureLink+FurnitureType+DynamicAsset.api_filename+".swf?VERSION="+DynamicAsset.api_version+objfix);
	});
}

//Function for loading equipments
function loadequiplink(eID) {
	
	//Zero paddings
	eID.toString();
	if (eID < 100) eID = "0" + eID;
	if (eID <  10) eID = "0" + eID;
	
	$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/card/"+eID+".png\">");
	$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_on/"+eID+".png\">");
	$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/remodal/"+eID+".png\">");
	$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/statustop_item/"+eID+".png\">");
	
	if (eID !== "042") {
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_character/"+eID+".png\">");
		$embed.append(imglink+ServerIP+"/kcs/resources/image/slotitem/item_up/"+eID+".png\">");
	}
}
	
//load equipment icons via "for loops" statement
function loadequip() {
			
	for (EquipIDNum = 1; EquipIDNum < EquipIndex[0]; EquipIDNum++) {
	
		//Image prefetch embed function call (with damecon exception)
		loadequiplink(EquipIDNum);
	}
	
	$.each(EquipIndex, function(index, EquipIDNum){
		loadequiplink(EquipIDNum);
	});
	
}

//load titlecall audio calls via "for loops" statement
function loadtitlecall() {
			
	for (CallIDNum = 1; CallIDNum <= 26; CallIDNum++) {
	
		//mp3 prefetch embeds
		//For in-game voices that doesn't need padding
		if (CallIDNum <  3) $embed.append(objlink+ServerIP+"/kcs/sound/kc9999/"+CallIDNum+audfix);
		if (CallIDNum <  8) $embed.append(objlink+ServerIP+"/kcs/sound/kc9999/1"+CallIDNum+audfix);
		
		//Zero paddings
		if (CallIDNum <  10) CallIDNum = "0" + CallIDNum;
		
		//Intentionally wrapped in img for silence.
		if (CallIDNum <= 20) $embed.append(objlink+ServerIP+"/kcs/sound/titlecall/a/"+CallIDNum+audfix);
		if (CallIDNum <= 13) $embed.append(objlink+ServerIP+"/kcs/sound/titlecall/b/"+CallIDNum+audfix);
		if (CallIDNum <= 11) $embed.append(objlink+ServerIP+"/kcs/sound/titlecall/c/"+CallIDNum+audfix);
		if (CallIDNum <= 18) $embed.append(objlink+ServerIP+"/kcs/sound/kc9999/3"+CallIDNum+audfix);
		$embed.append(objlink+ServerIP+"/kcs/sound/kc9999/4"+CallIDNum+audfix);
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
			
			//declare shipcg link as partial code, inject version params if higher than 1.
			var shipcglnk = objlink+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf";
			if (ShipGraph.api_version[0] > 1) shipcglnk += "?VERSION="+ShipGraph.api_version[0];
			
			$embed.append(shipcglnk+objfix);
			}
	});
}

/*
function loadshipvoice() {
	//pending reconstruction
}
*/
