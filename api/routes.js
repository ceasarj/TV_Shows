var superagent = require('superagent');


module.exports = function (app) {
	app.get('/api', function (req, res) {
		//console.log('http://api.tvmaze.com' + req.params.type + req.query.show  );
		superagent
			.get('http://api.tvmaze.com/search/shows' )
			.query({q : req.query.show})
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				} else { 
					console.log(response.text);
					//console.log(response);
					res.json(response);
				}
			});
		});
		app.get('/api/show/:id', function(req,res){
        superagent
            .get('http://api.tvmaze.com/shows/' + req.params.id)
            .query({embed: 'cast'})
            .end(function(err, response){
            	//console.log(response.text);
                res.json(JSON.parse(response.text));
            });
    	});
}