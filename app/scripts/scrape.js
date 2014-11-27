//var casper = require('casper').create();
//
//casper.start('http://www.sportsclubstats.com/NHL/Western/Central/Dallas.html', function() {
//    if (this.exists('div.tC div.sub:nth-of-type(2)')) {
//        this.echo(document.querySelector('div.tC div.sub:nth-of-type(2)');
//    }
//});
//
//casper.run();

var casper = require('casper').create();
var url = 'http://www.sportsclubstats.com/NHL/Western/Central/Dallas.html';
 
casper.start(url, function() {
    var js = this.evaluate(function() {
		return document; 
	});	
    this.echo(js.all[0].outerHTML); 
});
casper.run();