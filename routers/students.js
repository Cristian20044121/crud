const express = require('express');
const router = express.Router();
const students = require('../models/students');

router.get('/', (req, res) => {
    const allStudents = students.getStudents();
    res.json(allStudents);
});

router.get('/:id', (req, res) => {
    const student = students.getStudentById(parseInt(req.params.id));
    res.json(student);
});
router.post('/', (req,res)=>{
    const newStudent = students.createStudent(req.body);
    res.json(newStudent);
})

router.put('/:id', (req, res) => {
    const updatedStudent = students.updateStudent(req.params.id, req.body);
    res.json(updatedStudent);
});

router.delete('/:id', (req, res) => {
    const deletedStudent = students.deleteStudent(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: 'No se encontro este estudiante' });
    }
    res.json(deletedStudent);
});

module.exports = router;
