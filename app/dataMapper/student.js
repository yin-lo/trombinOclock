const client = require('../db');

const studentDataMapper = {
  async getStudentsByPromoId(promoId) {
    const resultStudents = await client.query('SELECT * FROM student WHERE promo_id = $1 ORDER BY first_name ASC', [promoId]);
    const studentsFromPromo = resultStudents.rows;

    return studentsFromPromo;
  },
};

module.exports = studentDataMapper;
