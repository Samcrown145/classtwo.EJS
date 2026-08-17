const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    student_id:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const studentModel = mongoose.model('students', studentSchema);
module.exports = {studentModel};