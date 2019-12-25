$(document).ready(function(){
	google.charts.load('current', {'packages' : ['corechart']});
	google.charts.setOnLoadCallback(drawCryptoChartIotaValue);
	
	function drawCryptoChartIotaValue() {
		var data = google.visualization.arrayToDataTable([
			['Date', 'IotaValue', 'MoneySpend'],
			['10.05.', 139.86*0.25000, 200],
			['15.05.', 139.86*0.36207, 200],
			['20.05.', 139.86*0.35910, 200],
			['22.05.', 139.86*0.35255, 200],
			['24.05.', 139.86*0.34749, 200],
			['29.05.', 139.86*0.46656, 200]
		]);
		
		var options = {
				title: 'Current Value Iota',
				subtitle: 'In Euro'
		}
		
		var chart = new google.visualization.LineChart(document.getElementById('current_value_iota'));
		chart.draw(data, options);
	}
});