const express = require('express');
const router = express.Router();
const courses= require('../models/courses');

router.get('/', (req, res)=>{
    const allCoursers = courses.allCoursers();
    res.json(allCoursers);
});
router.get('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.getCourseById(courseId);
    res.json(course);
  });

router.post('/', (req, res)=>{
    const newCourse =courses.newCourse(req.body);
    res.json(newCourse);
});

router.put('/:id', (req, res)=>{
    const updatedCourse = courses.updatedCourse(req.params.id, req.body);
    res.json(updatedCourse);
});
router.delete('/:id', (req, res)=>{
    const deleteCourse = courses.deleteCourse(req.params.id);
    if(!deleteCourse){
        return res.status(404).json({error: 'No se encontro este curso' })
    }
    res.json(deleteCourse);
});
module.exports = router;
