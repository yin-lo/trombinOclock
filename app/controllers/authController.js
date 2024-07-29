const authController = {
  showLoginForm(req, res) {
    res.render('auth/login');
  },

  login(req, res) {
    // Je stock dans la session le username de l'utilisateur
    req.session.username = req.body.username;
    res.redirect('/');
  },
};

module.exports = authController;
