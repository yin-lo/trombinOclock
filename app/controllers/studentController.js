const promoDataMapper = require('../dataMapper/promo');
const studentDataMapper = require('../dataMapper/student');

const studentController = {
  async showCreateStudentForm(req, res) {
    // On ne veux pas qu'un autre utilisateur que michel puisse accéder à cette page
    if (req.session.username !== 'michel') {
      res.status(403).send('Accès interdit');
      return;
    }
    try {
      // On utilise notre dataMapper pour récupérer la liste des promos
      // Cela retourne une promesse que l'on va attendre avec `await`
      const promos = await promoDataMapper.getAllPromo();

      res.render('student/create', {
        promos,
      });
    } catch (error) {
      console.trace(error);
      res.status(500).send('Erreur serveur');
    }
  },

  async createStudent(req, res) {
    try {
      // Je vais passé les données de mon formulaire à mon dataMapper
      const studentData = req.body;

      // J'appelle ma méthode de mon dataMapper pour créer un étudiant
      await studentDataMapper.createStudent(studentData);

      // Je redirige l'utilisateur vers la liste des étudiants de la promo
      res.redirect(`/promos/${studentData.promo_id}/students`);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Erreur serveur');
    }
  },
};

module.exports = studentController;
