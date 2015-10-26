(function(){
	
	var ServerNum = parseInt( window.location.hash.substring(1) ,10) || 1;
	var ServerIndex = ServerNum - 1;
	var ServerData = servers[ServerIndex];
	var ServerIP = ServerData.ip;
	
	$(document).on("ready", function(){
		$("#progress-title").text(ServerData.name);
		
		$.each(statics, function(index, StaticAsset){
			$("#embeds").append("<embed width=\"0%\" height=\"0%\" name=\"plugin\" src=\"http://"+ServerIP+"/"+StaticAsset+"\" type=\"application/x-shockwave-flash\">");
		});
		
		$.each(shipgraph, function(index, ShipGraph){
			$("#embeds").append("<embed src=\"http://"+ServerIP+"/kcs/resources/swf/ships/"+ShipGraph.api_filename+".swf\">");
		});
		
	});
	
})();
