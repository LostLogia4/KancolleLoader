//Global variables for parsing hashed suffix and assign the appropriate server.
var ServerNum = parseInt( window.location.hash.substring(1) , 10 ) || 1;
var ServerIndex = ServerNum - 1;
var ServerData = servers[ServerIndex];
var ServerIP = ServerData.ip;

//Global variables for current and expirydate (to be moved later)
var currentDate = new Date();
var expiryDate = new Date(expiryDate);

//wrapper function
function loaddynamiclinks() {
	//create confirmation box if the stipulated expiry date has been reached.
	if (currentDate > expiryDate) {
		$("#progress-text").text("CG Links may be outdated. Load anyway?");
		//append a load UI and CG button 
		//event handlers
		/*
		$(document).one('click','#loadUI',loadinterface);
		$(document).one('click','#loadCG',loadshipcg);
		*/
	} else {
		//loadinterface();
		loadshipcg();
	}
}

//primary function
(function(){
	
	$(document).on("ready", function(){
		
		$("#progress-title").text(ServerData.name);     //display the server name
		$("#progress-text").text("Loading...");         //replace initializing with loading
		
		loadbgm();
		loadmap();
		loadfurnish();
		loadequip();
		loadeqtxt();
		loaditem();
		loadshipcg();
		
	});
	
})();
