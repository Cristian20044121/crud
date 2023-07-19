const express = require('express');
const router = express.Router();
const teachers = require('../models/teachers');

router.get('/', (req, res)=>{
    const allTeachers = teachers.allTeacher();
    res.json(allTeachers);
});

module.exports = router;