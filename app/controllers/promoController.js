const promoDataMapper = require('../dataMapper/promo');
const studentDataMapper = require('../dataMapper/student');

const promoController = {
  // En ajoutant async devant ma fonction, je vais pouvoir utiliser await
  // à l'intérieur de ma fonction
  async listPromo(req, res) {
    // Lorsque je fais une action asynchrone, je vais encapsuler
    // Le code dans un bloc try/catch pour gérer les erreurs
    try {
      // Je récupère les promos de ma BDD
      const promos = await promoDataMapper.getAllPromo();

      res.render('promo/index', {
        promos,
      });
    } catch (error) {
      // Pour notre information, on va afficher l'erreur dans la console
      console.trace(error);
      // Si j'ai une erreur, je vais envoyer une erreur 500
      res.status(500).send('Erreur serveur');
    }
  },
  async detailPromo(req, res) {
    // Pour récupérer les infos de mon url (les paramètres)
    // Attention ! Les paramètres sont toujours des chaînes de caractères
    // Pour faire ma recherche j'ai besoin de récupérer un nombre
    const promoId = req.params.id;

    try {
      const promoFound = await promoDataMapper.getPromoById(promoId);

      if (promoFound) {
        res.render('promo/detail', {
          promoFound,
        });
      } else {
        res.status(404).send('404 Not Found');
      }
    } catch (error) {
      // Pour notre information, on va afficher l'erreur dans la console
      console.trace(error);

      // Si j'ai une erreur, je vais envoyer une erreur 500
      res.status(500).send('Erreur serveur');
    }
  },

  async listStudentsFromPromo(req, res) {
    // On récupère l'id de la promo dans l'url
    const promoId = Number(req.params.id);

    try {
      // Je récupère la promo correspondante à l'id
      const promoFound = await promoDataMapper.getPromoById(promoId);

      if (promoFound) {
        const studentsFromPromo = await studentDataMapper.getStudentsByPromoId(promoId);

        res.render('promo/students', {
          promoFound,
          studentsFromPromo,
        });
      } else {
        res.status(404).send('404 Not Found');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).send('Erreur serveur');
    }
  },

  async showCreatePromoForm(req, res) {
    res.render('promo/create');
  },

  async createPromo(req, res) {
    try {
      // req.body => { name: '...', github_organization: '' }
      const data = req.body;
      await promoDataMapper.createPromo(data);

      // Si tout ce passe bien (je suis pas passé dans le catch)
      // Je redirige l'utilisateur vers la liste des promos
      res.redirect('/promos');
    } catch (error) {
      console.trace(error);
      res.status(500).send('Erreur serveur');
    }
  },
};

module.exports = promoController;
