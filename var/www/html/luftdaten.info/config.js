var urls = [
	{
		url: 'info.html', // Set the url
		duration: 20000 // This duration will override the default duration
	},
	{
		url: 'https://deutschland.maps.luftdaten.info/?nooverlay#13/49.7956/9.9636',
		title: 'Aktuelle Belastung mit Feinstaub in <strong>Würzburg</strong>', // Optionally set a title for this page
	},
	{
		url: 'https://deutschland.maps.luftdaten.info/?nooverlay#11/49.8014/10.0337',
		title: 'Aktuelle Belastung mit Feinstaub im <strong>Landkreis Würzburg</strong>'
	},
	{
		url: 'https://deutschland.maps.luftdaten.info/?nooverlay#9/49.5760/10.9591',
		title: 'Aktuelle Belastung mit Feinstaub in <strong>Franken</strong>'
	},
	{
		url: 'https://deutschland.maps.luftdaten.info/?nooverlay#8/48.865/11.841',
		title: 'Aktuelle Belastung mit Feinstaub in <strong>Bayern</strong>'
	},
	{
		url: 'https://deutschland.maps.luftdaten.info/?nooverlay#5/50.732/10.745',
		title: 'Aktuelle Belastung mit Feinstaub in <strong>Deutschland</strong>'
	}
];

// This is the default duration
var defaultFrameDurationTime = 30000;

// Nuber of progress bar ticks
var progressBarTicks = 100;

// Start with this url
var nextUrl = 0;
