/**
* Scan.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	// mac adresa	
	mac: {
	type: 'STRING',
	size: 17	
	},
	// nazev site
	ssid: {
	type: 'STRING'	
	},
	// frekvence site
	frequency: {
	type: 'INTEGER'
	},
	// sila signalu
	strength: {
	type: 'INTEGER'	
	},
	// moznosti site
	capabilites: {
	type: 'TEXT'	
	},
	
	// data z accelerometru
	
	accx: {
	type: 'FLOAT'	
	},

	accy: {
	type: 'FLOAT'	
	},

	accz: {
	type: 'FLOAT'	
	},

	// data z gyroskopu
	
	gyrox: {
	type: 'FLOAT'	
	},

	gyroy: {
	type: 'FLOAT'	
	},

	gyroz: {
	type: 'FLOAT'	
	},
	
	// data z magnetomeru (kompas)	

	magx: {
	type: 'FLOAT'	
	},

	magy: {
	type: 'FLOAT'	
	},

	magz: {
	type: 'FLOAT'	
	},
	
	
	// cas porizeni scanu v zarizeni	
	timeOfScan: {
	type: 'DATETIME'	
	},
	
	position: { model: 'position'}
  }
};

