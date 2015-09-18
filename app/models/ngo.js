var db = require("../../db.js"); 
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId; 
module.exports = {
	getAllNGOs: function(req, res){   
   		var ngo = db.collection('ngo'),
   			campaign = db.collection('campaign');
   		db.ngo.find(
   			{},
   			{
				"img": true,
				"mission": true,
				"name":true,
				"shortDesc":true,
				"url":true,
				"campaigns":true
			},
   			function(err, docs) {
	       		res.send(docs);
	    });      
	},

	getNGODetails: function(req, res){   
   	    var ngo = db.collection('ngo'),
   	    	campaign = db.collection('campaign');
    	db.ngo.findOne({ _id: ObjectId(req.params.id)}, function(err, docs) {
    		var ngo_campaigns = db.campaign.find(
    				{_id: { $in : docs.campaigns } } ,
    				{
						   				"img": true,
						    			"mission": true,
						    			"name":true,
						    			"shortDesc":true,
						    			"url":true
						    		},
    				function(er,dc){
    					docs.campaigns = dc;
    					res.send(docs);
    				});
    		  
    	}); 
	},

	getNGOCampaigns: function(req, res){  
		var ngo = db.collection('ngo'),
			campaign = db.collection('campaign'); 
		db.ngo.findOne({ _id: ObjectId(req.params.id)}, function(err, docs) {
    		var ngo_campaigns = db.campaign.find(
    								{_id: { $in : docs.campaigns } },
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
    		  
    						}); 
	},

	addNGO: function(req, res){
       
	},

	updateNGODetails: function(req, res){
	   
	},

	deleteNGO: function(req, res){
		
	}
}
