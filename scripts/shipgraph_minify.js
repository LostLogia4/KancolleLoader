var $embed = $("#embeds");
var mini = true;
var endline = "<br>";

function printshipgraph(atomize) {
	if (atomize == true) {
		
		$embed.append("\"api_id\": " + svdata.api_data.api_mst_shipgraph[i].api_id + ",");
		$embed.append("\"api_sortno\": " + svdata.api_data.api_mst_shipgraph[i].api_sortno + ",");
		$embed.append("\"api_filename\": " + "\"" + svdata.api_data.api_mst_shipgraph[i].api_filename + "\",");
		$embed.append("\"api_version\": " + "[" + svdata.api_data.api_mst_shipgraph[i].api_version[0] + "]");
		
		if (i == (svdata.api_data.api_mst_shipgraph.length - 1)) $embed.append("}];");
		else $embed.append("}, {");
		
	} else {
		
		var tab = "&#9;"
		var tab2 = tab + tab;
		var tab3 = tab2 + tab;

		$embed.append(tab3 + "\"api_id\": " + svdata.api_data.api_mst_shipgraph[i].api_id + "," + endline);
		$embed.append(tab3 + "\"api_sortno\": " + svdata.api_data.api_mst_shipgraph[i].api_sortno + "," + endline);
		$embed.append(tab3 + "\"api_filename\": " + "\"" + svdata.api_data.api_mst_shipgraph[i].api_filename + "\"," + endline);
		$embed.append(tab3 + "\"api_version\": " + "[" + svdata.api_data.api_mst_shipgraph[i].api_version[0] + "]" + endline);
		
		if (i == (svdata.api_data.api_mst_shipgraph.length - 1)) $embed.append(tab2 + "}];");
		else $embed.append(tab2 + "}, {" + endline);
	}
}

if (mini == true) $embed.append("var shipgraph = [{");
else $embed.append("var shipgraph = [{" + endline);

for (var i = 0;i < svdata.api_data.api_mst_shipgraph.length; i++) {
		printshipgraph(mini);
}
