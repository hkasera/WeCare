var conn = new Mongo();
db = conn.getDB('campaignindia');
var cursor = db.ngo.find();
var items = [];
items = cursor.toArray();
var dbstruc = {};
for (var i = 0; i < items.length; ++i) {
    var target = items[i];
    getKP(target,dbstruc);
}
printjson(dbstruc);

function getKP (target,dbstruc) {
	for (var k in target) {
		if(typeof target[k] !== "object"){
			if (target.hasOwnProperty(k) && !dbstruc.hasOwnProperty(k)) {
            	dbstruc[k] = typeof target[k];
        	}	
		}else{
			dbstruc[k] = {};
			getKP(target[k],dbstruc[k]);
		}       
    }
}