var projects = new Chartist.Bar('.project-count', {
	labels: ['2000', '2005', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',],
	series: [
		[4000, 13, 18, 20, 22, 25, 28, 30, 34]
	]
}, {
	high: 40,
	axisX: {
		labelInterpolationFnc: function(value, index) {
			return index % 2 === 0 ? value : null;
		}
	}
});

var projects = new Chartist.Bar('.epidat-count', {
	labels: ['2006', '2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017', '2018',],
	series: [
		[5490, 9965, 14391, 18127, 21554, 22279, 24112, 26380, 28963,31087,33395,33787]
	]
}, {
	high: 35000,
	axisX: {
		labelInterpolationFnc: function(value, index) {
			return index % 2 === 0 ? value : null;
		}
	}
});

projects.on('draw', function(data) {
	if (data.type === 'bar') {
		data.group.append(new Chartist.Svg('circle', {
			cx: data.x2,
			cy: data.y2,
			r: 35
		}, 'ct-slice-pie'));
		data.group.append(new Chartist.Svg('text', {
			transform: "matrix(1 0 0 1 "+(data.x2 - 7)+" "+(data.y2 + 4)+")",
			fill: "#FFF",
			value: "test"
		}, 'ct-slice-text').text(data.value.y));
	}
});
