module.exports = function(uri) {

	var mongoose = require('mongoose');

	mongoose.connect('mongodb://'+ uri);

	mongoose.connection.on('connected', function(){
		console.log('Conectado ao mongodb');
	});

	mongoose.connection.on('error', function(error){
		console.log('Erro de conexao com o banco de dados:' + error);
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Conexão com o servidor MongoDb finalizada');
	});

	process.on('SIGINT', function(){

		mongoose.connection.close(function(){

			console.log('Conexão com o MongoDb finalizada pelo termino da aplicação.');
			process.exit(0);
		});

	});
};