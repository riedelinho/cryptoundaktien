$(document).ready(function(){
	google.charts.load('current', {'packages' : ['corechart']});
	google.charts.setOnLoadCallback(drawCryptoChartAllValue);
	
	function drawCryptoChartAllValue() {
		var data = google.visualization.arrayToDataTable([
			['Date', 'BitcoinValue', 'MoneySpend'],
			['10.05.', 0.04062*5800 + 139.86*0.25000, 700],
			['15.05.', 0.04062*7214 + 139.86*0.36207, 700],
			['20.05.', 0.04062*7025 + 139.86*0.35910, 700],
			['22.05.', 0.04062*6936 + 139.86*0.35255, 700],
			['24.05.', 0.04062*7232 + 139.86*0.34749, 700],
			['29.05.', 0.04062*7825 + 139.86*0.46656, 700]
		]);
		
		var options = {
				title: 'Current Value All',
				subtitle: 'In Euro'
		}
		
		var chart = new google.visualization.LineChart(document.getElementById('current_value_all'));
		chart.draw(data, options);
	}
});