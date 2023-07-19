const express = require('express');
const app = express();
const studentsRouter = require('./routers/students');
const coursesRouter = require('./routers/courses');
const teachersRouter = require('./routers/teachers');

const PORT = 3000;

app.use(express.json());

// Obtener todos los estudiantes
app.use('/api/students', studentsRouter);

// Obtener todos los cursos
app.use('/api/courses', coursesRouter);

// obtener todos los profesores 
app.use('/api/teachers', teachersRouter);

app.listen(PORT, () => {
  console.log(`Servidor abierto en el puerto ${PORT}`);
});

