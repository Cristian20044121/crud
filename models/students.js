const students = [
  {
    "name": "Cristian Caro",
    "age": 15,
    "id": 1,
  },
  {
    "name": "Mariana",
    "age": 18,
    "id": 2,
  },
  {
    "name": "Carlos Perez",
    "age": 18,
    "id": 3,
  }
];

// Obtener todos los estudiantes
const getStudents = () => students;

//obetener un estudiante
const getStudentById = id => students.find(student => student.id === id);

// crear estudiante 
let lastId = 3;
const getNextId = () => (++lastId);
const createStudent = student => {
  student.id = getNextId();
  students.push(student);
  return student;
};

// Editar estudiante 
const updateStudent = (id, student) => {
  const index = students.findIndex(student => student.id === id);
  if (index === -1) {
      return {};
  }
  student.id = id;
  students[index] = student;
  return student;
};


// eliminar un estudiante 
const deleteStudent = id => {
  const index = students.findIndex(student => student.id === parseInt(id));
  if (index === -1) {
    return null;
  }
  const removedStudent = students.splice(index, 1)[0];
  console.log(removedStudent);
  return removedStudent;
};


module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
