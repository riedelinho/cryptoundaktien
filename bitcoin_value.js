$(document).ready(function(){
	google.charts.load('current', {'packages' : ['corechart']});
	google.charts.setOnLoadCallback(drawCryptoChartBitcoinValue);
	
	function drawCryptoChartBitcoinValue() {
		var data = google.visualization.arrayToDataTable([
			['Date', 'BitcoinValue', 'MoneySpend'],
			['10.05.', 0.04062*5800, 500],
			['15.05.', 0.04062*7214, 500],
			['20.05.', 0.04062*7025, 500],
			['22.05.', 0.04062*6936, 500],
			['24.05.', 0.04062*7232, 500],
			['29.05.', 0.04062*7825, 500]
		]);
		
		var options = {
				title: 'Current Value Bitcoin',
				subtitle: 'In Euro'
		}
		
		var chart = new google.visualization.LineChart(document.getElementById('current_value_bitcoin'));
		chart.draw(data, options);
	}
});