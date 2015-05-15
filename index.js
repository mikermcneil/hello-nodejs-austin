module.exports = function saySomething (options, cb){
	try {
		if (!options.hasOwnProperty('msg')) {
			return cb(new Error('`msg` is required'));
		}
	}
	catch (e) {
		return cb(e);
	}

	console.log(options.msg);
	setImmediate(function (){
		return cb();
	});
};
