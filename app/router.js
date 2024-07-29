const { Router } = require('express');
// J'utilise la destructuration pour ne récupérer que la méthode home de mon mainController
const { home } = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');
const authController = require('./controllers/authController');

const router = Router();

router.get('/', home);
router.get('/promos', promoController.listPromo);
router.get('/promos/create', promoController.showCreatePromoForm);
router.post('/promos/create', promoController.createPromo);
router.get('/promos/:id', promoController.detailPromo);
router.get('/promos/:id/students', promoController.listStudentsFromPromo);

router.get('/students/create', studentController.showCreateStudentForm);
router.post('/students/create', studentController.createStudent);

router.get('/login', authController.showLoginForm);
router.post('/login', authController.login);

module.exports = router;
