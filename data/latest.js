var latest = [

	//insert new stuffs here
	/*
	"/kcs/resources/swf/ships/zuikaku-kai_ni.swf",
	*/
//	last resource has no comma at its end.
//	"/kcs/resources/swf/ships/zuikaku-kai_ni_A.swf"

];

	
	/*
	//*Standalone loader.
	$(document).on("ready", function(){
		
		var ServerNum = parseInt( window.location.hash.substring(1) ,10) || 1;
		var ServerIndex = ServerNum - 1;
		var ServerData = servers[ServerIndex];
		var ServerIP = ServerData.ip;

		//Load the data values
		$.each(latest, function(index, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" style=\"visibility:hidden;\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
	});
	/*
