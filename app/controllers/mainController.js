const mainController = {
  home(req, res) {
    // Je vais pouvoir afficher les données liées à la session de l'utilisateur
    res.render('index', {
      username: req.session.username,
    });
  },
};

module.exports = mainController;
