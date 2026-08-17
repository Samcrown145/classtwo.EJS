const { studentModel } = require('../models/student.models');

const renderAbout = (req, res) => {
    const name = 'samcrown';
    res.render('about', { name: name });
};

const renderSignin = (req, res) => {
    res.render('Signin');
};

const renderSignup = (req, res) => {
    res.render('signup');
};

const renderIndexPage = (req, res) => {
    res.sendFile(require('path').join(__dirname, '../index.html'));
};

const createStudent = async (req, res) => {
    try {
        const newStudent = new studentModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            student_id: req.body.student_id,
            password: req.body.password
        });

        const savedStudent = await newStudent.save();

        res.status(200).json({
            status: true,
            message: 'Student saved successfully',
            data: savedStudent
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: 'Failed to save student',
            error: error.message
        });
    }
};

const getStudentById = async (req, res) => {
    try {
        const studentId = req.body.student_id || req.query.student_id;
        const students = await studentModel.find({ student_id: studentId });

        res.status(200).json({
            status: true,
            message: 'Students retrieved successfully',
            data: students
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: 'Failed to retrieve students',
            error: error.message
        });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await studentModel.find();

        res.status(200).json({
            status: true,
            message: 'Students retrieved successfully',
            data: students
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: 'Failed to retrieve students',
            error: error.message
        });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { student_id, first_name, last_name, email, password } = req.body;

        const updatedStudent = await studentModel.findOneAndUpdate(
            { student_id: student_id },
            { first_name, last_name, email, password },
            { new: true }
        );

        res.status(200).json({
            status: true,
            message: 'Student updated successfully',
            data: updatedStudent
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: 'Failed to update student',
            error: error.message
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: true,
            message: 'Student deleted successfully',
            data: result
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: 'Failed to delete student',
            error: error.message
        });
    }
};

const deleteAllStudents = async (req, res) => {
    try {
        const result = await studentModel.deleteMany({});

        res.status(200).json({
            status: true,
            message: 'All students deleted successfully',
            data: result
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: 'Failed to delete students',
            error: error.message
        });
    }
};

module.exports = {
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
};
