var latest = [

	//insert new stuffs here
	/*
	"/kcs/resources/swf/ships/zuikaku-kai_ni.swf",
	"/kcs/resources/swf/ships/zuikaku-kai_ni_A.swf",
	*/
//	last resource has no comma at its end.
//	"/kcs/resources/swf/map/31_06.swf?version=1.0.0"

	"/kcs/resources/swf/ships/wvnchfzhekfo.swf"

];

	//*Prototype for dedicated loader.
	$(document).on("ready", function(){
		
		//Load the data values
		$.each(latest, function(index, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
		//Flush or remove the old embeds
		$("#embeds").detach();
		$("#embeds").empty();
			
	});
	//*/
	
