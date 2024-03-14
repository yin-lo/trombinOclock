const promoDataMapper = require('../dataMapper/promo');

const studentController = {
	async showCreateStudentForm(req, res) {
		try {
			const promos = await promoDataMapper.getAllPromo();

			res.render('student/create', { promos });
		} catch (error) {
			console.trace(error);

			res.status(500).send('Erreur serveur');
		}
	},

	async createStudent(req, res) {},
};

module.exports = studentController;
