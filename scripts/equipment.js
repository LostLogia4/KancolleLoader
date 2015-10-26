//testing
//note:experimental

	var CurrentMaxEquip = 151;

	for (EquipIDNum = ; i =< CurrentMaxEquip; EquipIDNum++) { 
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
	}