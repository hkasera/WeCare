var db = require("../../db.js");
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId; 


module.exports = function(self){
	self.app.get('/ngos' ,function(req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.send(self.cache_get('ngos.html') );
    });
    self.app.get('/ngo/:id' , function(req, res) {
        res.setHeader('Content-Type', 'text/html');
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
                            if(er){

                            }else{
                                docs.campaigns = dc;
                                res.render('ngo.html', { ngo: docs });
                            }
                            
                        });
                  
            });
    });
    self.app.get('/campaign/:id' , function(req, res) {
        res.setHeader('Content-Type', 'text/html');
             var campaign = db.collection('campaign');
            db.campaign.findOne({ _id: ObjectId(req.params.id)}, function(err, docs) {
                if(!err){
                    res.render('campaign.html', { campaign: docs });
                }
            }); 
    });
    self.app.get('/' , function(req, res) {
        res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );
    });
}