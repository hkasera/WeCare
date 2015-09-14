var db = require("../../db.js");
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId; 
module.exports = {
	getAllCampaigns: function(req, res){  
		var campaign = db.collection('campaign'); 
   		db.campaign.find(
   			{},
   			{
   				"img": true,
    			"mission": true,
    			"name":true,
    			"shortDesc":true,
    			"url":true,
    			"ngo":true
    		},function(err, docs) {
	       	res.send(docs);  
	    }); 
	},

	getCampaignsOfNGO:function(req,res){
		var campaign = db.collection('campaign');
		console.log(req.params.id);
		db.campaign.find(
    								{_id: { $in : ObjectId(req.params.id) } },
						   			{
						   				"img": true,
						    			"mission": true,
						    			"name":true,
						    			"shortDesc":true,
						    			"url":true,
						    			"ngo":true
						    		} ,
    								function(er,dc){
    									res.send(dc);
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

