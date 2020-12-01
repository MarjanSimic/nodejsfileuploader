var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {

	if (req.url == '/upload') {
		
		var form = new formidable.IncomingForm();

		form.parse(req, function (err, fields, files) {
			var read = files.file.path;
			var create = 'uploads/' + files.file.name;

			fs.rename(read, create, function (err) {
				if (err) throw err;
				res.write('File Uploaded Successfully');
				res.end();
			});
		});

	}

}).listen(8080);