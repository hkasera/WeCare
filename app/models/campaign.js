var db = require("../../db.js");
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId; 
module.exports = {
	getAllCampaigns: function(req, res){  
		var campaign = db.collection('campaign'); 
   		db.campaign.find(function(err, docs) {
	       	res.send(docs);  
	    }); 
	},

	getCampaignDetails: function(req, res){   
   	    var campaign = db.collection('campaign');
    	db.campaign.findOne({ _id: ObjectId(req.params.id)}, function(err, docs) {
        	res.send(docs);  
    	}); 
	},

	addCampaign: function(req, res){
       
	},

	updateCampaignDetails: function(req, res){
	   
	},

	deleteCampaign: function(req, res){
		
	}
}

