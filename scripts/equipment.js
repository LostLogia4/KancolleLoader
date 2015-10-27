//testing
//note:experimental

	var CurrentMaxEquip = 151;

	for (EquipIDNum = 1; EquipIDNum <= CurrentMaxEquip; EquipIDNum++) { 
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
		$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
	}
	
		/*
			old bulky code
			if (EquipIDNum < 10) {
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+"00"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+"00"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+"00"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+"00"+EquipIDNum+".png\">");
			}
			
			else if (EquipIDNum < 100) {
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+"0"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+"0"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+"0"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+"0"+EquipIDNum+".png\">");
			}
			
			else {
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/card/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_character/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_on/"+EquipIDNum+".png\">");
			$("#embeds").append("<img width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src\"http://"+ServerIP+"/kcs/resources/image/slotitem/item_up/"+EquipIDNum+".png\">");
			}
		*/