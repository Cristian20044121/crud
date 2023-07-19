const coursers = [
    {
        "name": "Javascript",
        "teacher": "Jhon Perez",
        "duraction": "6 meses",
        "id": 1
    },
    {
        "name": "Python",
        "teacher": "Marcos Henao",
        "duraction": "10 meses",
        "id": 2
    },
    {
        "name": "Node.js",
        "teacher": "Emanuel Castro",
        "duraction": "8 meses",
        "id": 3
    }
]

// obtener todos los cursos 
const allCoursers = () => coursers;

// obtener un curso 
const getCourseById = id =>coursers.find(courser => courser.id === id);

// agregar coursers 
let lastId = 3;
const getNextId = () => (++lastId);

const newCourse = course =>{
    course.id= getNextId();
    coursers.push(course);
    return course;
}

// editar curso
const updatedCourse = (id, course)=>{
    const index = coursers.findIndex(course => course.id === parseInt(id));
    if(index == -1){
        return 'error al buscar la info';
    }
    course.id = id;
    coursers[index]= course;
    return course;
}

// eliminar curso 
const deleteCourse = (id) =>{
    const index = coursers.findIndex(courser => courser.id === parseInt(id));
    if(index === -1){
        return 'error al buscar la info';
    }

    const removedCourse = coursers.splice(index,1)[0];
    return removedCourse;
}

module.exports={
    allCoursers,
    getCourseById,
    newCourse,
    updatedCourse,
    deleteCourse
}