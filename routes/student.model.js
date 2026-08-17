const express = require('express');
const {
    renderAbout,
    renderSignin,
    renderSignup,
    renderIndexPage,
    createStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deleteStudent,
    deleteAllStudents
} = require('../controllers/student.controllers');

const router = express.Router();

router.get('/', renderAbout);
router.get('/signin', renderSignin);
router.get('/signup', renderSignup);
router.get('/index', renderIndexPage);

router.post('/postit', createStudent);
router.get('/getit', getStudentById);
router.get('/getall', getAllStudents);
router.put('/updateit', updateStudent);
router.delete('/deleteit/:id', deleteStudent);
router.delete('/deleteall', deleteAllStudents);

module.exports = router;
