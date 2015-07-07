var fs = require('fs');
var mongoose = require('mongoose');

// wget http://mtgjson.com/json/AllSets.json
//mongodb://<dbuser>:<dbpassword>@ds031852.mongolab.com:31852/prog219-xue
var setSchema = mongoose.Schema({
	"name": String,
	"code": String,
	"gathererCode": String,
	"magicCardsInfoCode": String,
	"releaseDate": String,
	"border": String,
	"type": String,
	"booster": [String]
});

var Set = mongoose.model('magic-set', setSchema);
var connected = false;
var totalSetsSaved = 0;
var setNames = [];

function doConnection() {
	var baseUrl = 'mongodb://';
	var userName = 'csc';
	var password = 'xue';
	var siteAndPort = 'ds031852.mongolab.com:31852';
	var databaseName = 'prog219-xue';
	var url = baseUrl + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
	console.log(url);
	mongoose.connect(url);
}

function insertSet(setName, data) {
	if (!connected) {
		connected = true;
		doConnection();
	}
	var set = new Set({
		name: data.name, 
		code: data.code, 
		gatheringCode: data.gatheringCode, 
		magicCardsInfoCode: data.magicCardsInfoCode, 
		releaseDate: data.releaseDate,
		border: data.border,
		type: data.type,
		booster: data.booster
	});
	set.save(function(err) {
		console.log('saved: ', set.name);
		totalSetsSaved++;
		if (totalSetsSaved === setNames.length) {
			mongoose.disconnect(); 
			console.log(setNames.length);
		}
	});
}

function writeSetToFile(setName, data) {
	fs.writeFile(setName  + '.json', JSON.stringify(data, null, 4), function(err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log('Success');
		}
	});
}

function writeData(setName, data, writeToDisk, writeSets) {
	if (writeToDisk) {
		writeSetToFile(setName, data);
	}
	if (writeSets) {
		insertSet(setName, data);
	}
}

fs.readFile('AllSets.json', function(err, allSets) {
	if (err) throw err;
	allSets = JSON.parse(allSets);
	for(var set in allSets) {
		 if (allSets.hasOwnProperty(set)) {
			setNames.push(set);
		}
	}
	
	
	for (var i = 0; i < setNames.length; i++) {
		var setName = setNames[i];
		writeData(setName, allSets[setName], true, true);
	}
	console.log('ending all reads and writes.');
}); 
