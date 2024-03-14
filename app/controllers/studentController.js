const promoDataMapper = require('../dataMapper/promo');
const studentDataMapper = require('../dataMapper/student');

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

	async createStudent(req, res) {
		try {
			const data = req.body;
			
			await studentDataMapper.createStudent(data);
	  
			res.redirect(`/promos/${data.promo_id}/students`);
			
		  } catch (error) {
			console.trace(error);
			res.status(500).send('Erreur serveur');
		  }
	},
};

module.exports = studentController;
