//Global variables for parsing hashed suffix and assign the appropriate server.
var ServerNum = parseInt( window.location.hash.substring(1) , 10 ) || 1;
var ServerIndex = ServerNum - 1;
var ServerData = servers[ServerIndex];
var ServerIP = ServerData.ip;

//Global variables for current and expirydate
var currentDate = new Date();
var expiryDate = new Date(expiryDate);

//wrapper function for links with (probably outdated) version parameters
function loadvlinks() {
	//create confirmation box if the stipulated expiry date has been reached.
	if (currentDate > expiryDate) {
		//add a warning text
		$("#progress-text")
			.css("font-weight","bold")
			.css("color","red")
			.text("CG Links may be outdated. Load anyway?");
		
		//append a load UI and CG button 
		$("#progress")
			.append('<button id="loadUI">Load UI</button>')
			.append('<button id="loadCG">Load CG</button>');
		
		//event handler for load UI button.
    		$("#loadUI").click(function() {
			loadinterface();
			$(this).text("UI loaded").attr('disabled', true);
    		});
    		
		//event handler for load CG button.
    		$("#loadCG").click(function() {
			loadshipcg();
			$(this).text("CG loaded").attr('disabled', true);
    		});
		
	} else {
		//just load both of them.
		loadinterface();
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
		loadvlinks();
		
	});
	
})();
