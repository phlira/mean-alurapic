var api ={};

api.lista = function(req, res) {
	var grupos = [
	 	{_id: 1, nome: 'Esporte'},
	 	{_id: 2, nome: 'lugares'},
	 	{_id: 2, nome: 'animais'}
	 ];

	 res.json(grupos);
};

module.exports = api;