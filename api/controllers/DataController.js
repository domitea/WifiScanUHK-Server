/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `DataController.upload()`
   */
  upload: function (req, res) {
	level = Level.create(req.allParams()).exec(function createCB(err,created){console.log("Yes!")});
    return res.json(level);
  },


  /**
   * `DataController.download()`
   */
  download: function (req, res) {
	console.log(req.method);
  }
};

