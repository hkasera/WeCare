var Campaign = require("../models/campaign.js");
var NGO = require("../models/ngo.js");  
var Activity = require("../models/activity.js"); 

module.exports = function(self){
	self.app.get('/get/campaigns' , function(req, res) {
        Campaign.getAllCampaigns(req,res);
    });

    self.app.get('/get/ngo' , function(req, res) {
        NGO.getAllNGOs(req,res);
    });

    self.app.get('/get/ngo/:id' , function(req, res) {
        NGO.getNGODetails(req, res);
    });

     self.app.get('/get/ngo/:id/campaigns' , function(req, res) {
        NGO.getNGOCampaigns(req, res);
    });

    self.app.get('/get/campaign/:id' , function(req, res) {
        Campaign.getCampaignDetails(req, res);
    });
 
}
