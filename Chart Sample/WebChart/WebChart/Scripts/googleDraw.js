// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.


function onload()
{

 drawChart();
                

}

function drawChart()
{

	var e = document.getElementById("slChartValue");
	var chartVal = e.options[e.selectedIndex].value;

   var chartData = retrieveChartData();

   var options = setChartOptions( 'Google Charts','400','300')

   var chart = selectChart(chartVal);

   chart.draw(chartData, options);
}

function getJSONData()
{
	var url = '/resource/sample.json';
	var jsonData = [];
	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
		success: function(data) { jsonData = data;},
		async: false
	});

	return jsonData;

}

function retrieveChartData() {

   //Retrieve Data from Sample Json Data
	var jsondata = getJSONData();


   var chartData = new google.visualization.DataTable();

   // Set Graph Data Parameters
   // e.g data.addColumn('[datatype]', '[name]');

   chartData.addColumn('string', 'Field A');
   chartData.addColumn('number', 'Field B');

   // Append Data Values
   for (var i = 0 ; i < jsondata.length; i++) {
   	f = jsondata[i].FieldA
   	n = jsondata[i].FieldB
   	chartData.addRows([[f, n]])
   }

  	

   return chartData;

}

function setChartOptions(title,width, height)
{
   return options = {'title': title,
                       'width': width,
                       'height': height};
}


function selectChart(chartValue)
{
	switch (chartValue) {
		case '1':
			return new google.visualization.PieChart(document.getElementById('chart_div'));
		case '2':
			return new google.visualization.ColumnChart(document.getElementById('chart_div'));
		default:
			return new google.visualization.PieChart(document.getElementById('chart_div'));
	}
}

