$(document).ready(function(){
	google.charts.load('current', {'packages' : ['corechart']});
	google.charts.setOnLoadCallback(drawCryptoChartBitcoin);
	
	function drawCryptoChartBitcoin() {
		var data = google.visualization.arrayToDataTable([
			['Date', 'Bitcoin'],
			['10.05.', 5800],
			['15.05.', 7214]
		]);
		
		var options = {
				title: 'Crypto Kurs Bitcoin',
				subtitle: 'In Euro'
		}
		
		var chart = new google.visualization.LineChart(document.getElementById('crypto_kurs_bitcoin'));
		chart.draw(data, options);
	}
});