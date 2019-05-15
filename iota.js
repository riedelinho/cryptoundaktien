$(document).ready(function(){
	google.charts.load('current', {'packages' : ['corechart']});
	google.charts.setOnLoadCallback(drawCryptoChartIota);
	
	function drawCryptoChartIota() {
		var data = google.visualization.arrayToDataTable([
			['Date', 'Iota'],
			['10.05.', 0.25000],
			['15.05.', 0.36207]
		]);
		
		var options = {
				title: 'Crypto Kurs IOTA',
				subtitle: 'In Euro'
		}
		
		var chart = new google.visualization.LineChart(document.getElementById('crypto_kurs_iota'));
		chart.draw(data, options);
	}
});