/**
* Level.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	// patro	
	level:'INTEGER',
	// popis patra
	title: {
	type: 'STRING'	
	},

	positions: { collection: 'position', via: 'level' }
  }
};

